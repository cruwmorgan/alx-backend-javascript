const fs = require('fs').promises;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((data) => {
        let i = 0;
        let totalStudents = 0;
        let msg = 0;
        // Split the CSV data into lines
        const lines = data.trim().split('\n');
        const studentsByField = {};

        for (const line of lines) {
          if (line.trim() !== '' && i > 0) {
            totalStudents += 1;
							const [fname, lname, age, field] = line.split(','); // eslint-disable-line
            if (!studentsByField[field]) {
              studentsByField[field] = {
                count: 1,
                students: [fname],
              };
            } else {
              const newCount = studentsByField[field].count + 1;
              const newStudents = (studentsByField[field].students).concat(fname);
              studentsByField[field] = {
                count: newCount,
                students: newStudents,
              };
            }
          }
          i += 1;
        }

        // Log the total number of students
        console.log(`Number of students: ${totalStudents}`);

        // Log the number of students in each field
        msg += `Number of students: ${totalStudents}\n`;
        for (const field of Object.keys(studentsByField)) {
          const n = studentsByField[field].count;
          const names = studentsByField[field].students.join(', ');
          console.log(`Number of students in ${field}: ${n}. List: ${names}`);
          msg += `Number of students in ${field}: ${n}. List: ${names}\n`;
        }
        msg = msg.slice(0, -1);

        resolve(msg);
      })
      .catch((error) => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
