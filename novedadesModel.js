var pool = require('./bd');

async function getNovedades() {
  var query = "select * from novedades order by id desc";
  var rows = await pool.query(query);
  return rows;
}

module.esports = { getNovedades }
