export function generateKey(ref) {
  return firebase.database().ref(ref).push().key;
}
