export default function getListStudentIds(alist) {
  if (Array.isArray(alist)) {
    return alist.map((obj) => obj.id);
  }

  return [];
}
