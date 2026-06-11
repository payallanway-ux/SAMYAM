const fs = require("fs");
const path = require("path");

const yatraDetailsPath = path.join(__dirname, "../src/constants/yatra-details.ts");
const teerthaDetailsPath = path.join(__dirname, "../src/constants/teertha-details.ts");
const knowledgePortalPath = path.join(__dirname, "../src/routes/knowledge-portal.tsx");

// 1. Process Yatras
let yatraContent = fs.readFileSync(yatraDetailsPath, "utf-8");
// Remove imports
yatraContent = yatraContent.replace(/import\s+.*?;/g, "");
// Replace images with static paths
yatraContent = yatraContent.replace(/img:\s*ayodhyaKashiImg/g, 'img: "/images/ayodhya_kashi.png"');
yatraContent = yatraContent.replace(/img:\s*rishikeshBadrinathImg/g, 'img: "/images/rishikesh_badrinath.png"');
yatraContent = yatraContent.replace(/img:\s*shaktiPeethasImg/g, 'img: "/images/shakti_peethas.png"');
// Remove typescript interface exports
yatraContent = yatraContent.replace(/export\s+interface\s+\w+\s+\{[\s\S]*?\}/g, "");
// Convert the Record object to a module export
yatraContent = yatraContent.replace(/export\s+const\s+yatraDetailsDb\s*:\s*\S+\s*=\s*/, "module.exports = ");

// Write temporary js file to evaluate it
const tempYatraPath = path.join(__dirname, "temp-yatra.js");
fs.writeFileSync(tempYatraPath, yatraContent);
const yatraDetailsDb = require(tempYatraPath);
fs.unlinkSync(tempYatraPath);

// 2. Process Teerthas
let teerthaContent = fs.readFileSync(teerthaDetailsPath, "utf-8");
// Remove interfaces
teerthaContent = teerthaContent.replace(/export\s+interface\s+\w+\s+\{[\s\S]*?\}/g, "");
// Convert to module export
teerthaContent = teerthaContent.replace(/export\s+const\s+teerthaDetailsDb\s*:\s*\S+\s*=\s*/, "module.exports = ");

const tempTeerthaPath = path.join(__dirname, "temp-teertha.js");
fs.writeFileSync(tempTeerthaPath, teerthaContent);
const teerthaDetailsDb = require(tempTeerthaPath);
fs.unlinkSync(tempTeerthaPath);

// 3. Process Videos from knowledge-portal.tsx
const portalContent = fs.readFileSync(knowledgePortalPath, "utf-8");
// Find the JW array declaration
const jwMatch = portalContent.match(/const\s+JW\s*=\s*([\s\S]*?);/);
if (!jwMatch) {
  console.error("Could not find JW array in knowledge-portal.tsx");
  process.exit(1);
}
// Clean and evaluate the JW array
let jwContent = "module.exports = " + jwMatch[1];
const tempJwPath = path.join(__dirname, "temp-jw.js");
fs.writeFileSync(tempJwPath, jwContent);
const jwArray = require(tempJwPath);
fs.unlinkSync(tempJwPath);

// Map videos to schema
const seedVideos = [];
jwArray.forEach((category) => {
  let mappedCategoryName = "";
  if (category.id === "kashi") {
    mappedCategoryName = "Kashi Knowledge Portal";
  } else if (category.id === "quick-bits") {
    mappedCategoryName = "Kashi Knowledge Portal • Quick Bits";
  } else if (category.id === "testimonials") {
    mappedCategoryName = "Testimonials (Coming Soon)";
  }

  if (mappedCategoryName) {
    category.videos.forEach((video) => {
      seedVideos.push({
        category: mappedCategoryName,
        youtubeLink: video.url,
      });
    });
  }
});

// Prepare combined output
const output = {
  yatras: Object.values(yatraDetailsDb),
  teerthas: Object.values(teerthaDetailsDb),
  videos: seedVideos,
};

// Write output
const outputPath = path.join(__dirname, "../server/src/utils/seedData.json");
fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
console.log(`Successfully generated seed data file at ${outputPath}`);
console.log(`- Yatras: ${output.yatras.length}`);
console.log(`- Teerthas: ${output.teerthas.length}`);
console.log(`- Videos: ${output.videos.length}`);
