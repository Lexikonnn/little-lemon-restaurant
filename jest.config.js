module.exports = {
    // Umožní Jestu najít moduly v těchto složkách
    moduleDirectories: ["node_modules", "src"],
  
    // Používá simulaci DOM prostředí (nutné pro React komponenty)
    testEnvironment: "jsdom",
  
    // Automatické spuštění setup souboru (pro jest-dom a další)
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  
    // Přípony, které Jest bude hledat při importech
    moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
  
    // Ignoruj build složku a node_modules při testování
    testPathIgnorePatterns: ["/node_modules/", "/build/"],
  };