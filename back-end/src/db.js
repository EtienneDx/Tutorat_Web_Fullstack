const fs = require("fs");

const filePath = "./list.md";

module.exports.read = () => {
    try {
        const ret = [];
        const data = fs.readFileSync(filePath).toString().replace(/(\r\n|\n|\r)/gm, "\n").split("\n");
        for(const line of data) {
            if(line.startsWith("- [x]")) {
                ret.push({
                    text: line.substring(5),
                    checked: true,
                });
            } else if(line.startsWith("- []")) {
                ret.push({
                    text: line.substring(4),
                    checked: false,
                });
            }
        }
        return ret;
    } catch(e) {
        console.log(e);
        return [];
    }
};