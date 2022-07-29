const parsedHash = new URLSearchParams(
  window.location.hash.substring(1) // skip the first char (#)
);

export default parsedHash;
