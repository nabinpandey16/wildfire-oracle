exports.handler = async () => {
  const KEY = '057710348201925b4736c54936a012e8';
  const url = `https://firms.modaps.eosdis.nasa.gov/api/country/csv/${KEY}/VIIRS_SNPP_NRT/NPL/7`;

  try {
    const res = await fetch(url, {
      headers: {
        'Accept': 'text/csv,text/plain,*/*',
        'User-Agent': 'VayuOracle/1.0 (Nepal Wildfire Research Dashboard)'
      }
    });

    const csv = await res.text();

    // If NASA returned an error page or empty
    if (!res.ok) {
      return {
        statusCode: 502,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: `NASA FIRMS error: HTTP ${res.status}`
      };
    }

    if (csv.trim().startsWith('<') || csv.trim().length === 0) {
      return {
        statusCode: 502,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: `NASA returned non-CSV response: ${csv.substring(0, 200)}`
      };
    }

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'text/plain',
        'Cache-Control': 'public, max-age=600'
      },
      body: csv
    };

  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: `Fetch error: ${err.message}`
    };
  }
};
