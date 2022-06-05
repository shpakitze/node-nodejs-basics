export default class FsError extends Error {
  constructor(message) {
    super(message);
    this.name = 'FS';
  }
}
