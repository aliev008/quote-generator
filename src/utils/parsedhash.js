const parsedHash = new URLSearchParams(
    window.location.hash.substring(1) // skip the first char (#)
  );
  
//   console.log(parsedHash.get("any_hash_key")); 

export default parsedHash;