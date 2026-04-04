exports.handler = async () => {
  const KEY = '057710348201925b4736c54936a012e8';
  // Country endpoint is more reliable than bbox - NPL = Nepal ISO code
  const url = `https://firms.modaps.eosdis.nasa.gov/api/country/csv/${KEY}/VIIRS_SNPP_NRT/NPL/7`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`FIRMS returned HTTP ${res.status}`);
    const csv = await res.text();

    // Sanity check - NASA sometimes returns HTML error pages
    if (csv.trim().startsWith('<')) {
      throw new Error('NASA returned non-CSV response');
    }

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'text/plain',
        'Cache-Control': 'public, max-age=600' // cache 10 min
      },
      body: csv
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: `Error fetching FIRMS data: ${err.message}`
    };
  }
};
