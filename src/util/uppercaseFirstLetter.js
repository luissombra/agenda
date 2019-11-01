const uppercaseFirstLetter =
    (world) => Array.from(world)
      .map((letter, i) => i==0 ? letter.toUpperCase() : letter )
      .join("");

export default uppercaseFirstLetter;