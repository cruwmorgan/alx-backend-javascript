export default function getStudentsByLocation(alist, city) {
  return alist.filter((obj) => obj.location === city);
}
