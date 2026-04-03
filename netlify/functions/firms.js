exports.handler = async () => {
  const KEY = '057710348201925b4736c54936a012e8';
  const url = `https://firms.modaps.eosdis.nasa.gov/api/country/csv/${KEY}/VIIRS_SNPP_NRT/NPL/7`;
  const res = await fetch(url);
  const csv = await res.text();
  return {
    statusCode: 200,
    headers: { 'Access-Control-Allow-Origin': '*' },
    body: csv
  };
};
