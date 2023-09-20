const fs = require('fs');

function countStudents(path) {
  try {
    const results = fs.readFileSync(path, { encoding: 'utf8' });
    const dbrow = results.split(/\r?\n/);
    let i = 0;
    let totalStud = 0;
    const dbcolumn = {};

    for (const line of dbrow) {
      if (line.trim() !== '' && i > 0) {
        totalStud += 1;
				const [fname, lname, age, field] = line.split(','); // eslint-disable-line
        if (!dbcolumn[field]) {
          dbcolumn[field] = {
            count: 1,
            students: [fname],
          };
        } else {
          const newCount = dbcolumn[field].count + 1;
          const newStudents = (dbcolumn[field].students).concat(fname);
          dbcolumn[field] = {
            count: newCount,
            students: newStudents,
          };
        }
      }
      i += 1;
    }

    console.log(`Number of students: ${totalStud}`);
    for (const field of Object.keys(dbcolumn)) {
      const n = dbcolumn[field].count;
      const names = dbcolumn[field].students.join(', ');
      // console.log(`Number of students in ${field}: ${n}. List: ${names}`);
      console.log(`Number of students in ${field}: ${n}. List: ${names}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
