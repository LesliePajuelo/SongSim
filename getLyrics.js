// From https://songmeanings.com/artist/view/songs/7002/


/*
1. Get HTML into a variable in memory
2. Get relative URL for the songs (id="songslist" tr, td, a has href and title)
3. Navigate to song url, save song title (ss://songmeanings.com/songs/view/3530822107859527615/)
4. Get lyrics (class=lyric-box)
5. Save to it's own file
6. generate array with song slug objects, {slug: "drovemewild", artist: "TnS", title: "drove me wild", group: TnS.slug, dropdown: true},
*/

const https = require("https");
const DomParser = require('dom-parser');
const parser = new DomParser();
const fs = require("fs");
const path = require('path');
const cheerio = require('cheerio');

const artistUrl = "https://songmeanings.com/artist/view/songs/7002/";


saveHtml(artistUrl, { folder: "artistHTML", name: 'tns', type: "artist" })
// createSongFiles('tns.html')
// html2txt("/Users/lesliepajuelo/work/SongSim/tns/100x.html", deleteHTML);
function deleteHTML(filePath) {
  console.count('deleteHTML');
  fs.unlink(filePath, (err)=>{
    err ? console.error(err) : console.info(`${filePath.split('/').pop()} was deleted`);
  })
}

function saveHtml(url, options) {
  console.count(`saveHtml ${url}`);
  let { folder, name, type } = options;
  let file = path.join(__dirname, folder, `${name}.html`);

  https.get(url, (res) => {
    const { statusCode } = res;

    let error;

    if (statusCode !== 200) {
      error = new Error('Request Failed.\n' +
      `Status Code: ${statusCode}`);
      console.error(error.message);
      // Consume response data to free up memory
      res.resume();
      return;
      }



    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
      try {
        let dom = parser.parseFromString(rawData);

        fs.writeFile(file, dom.rawHTML, (err) => {
          if (err) throw err;
          let fileName = file.split('/').pop();
          console.count(`save html, write file ${fileName} for type ${type}`);

          if (type === "artist"){
            fs.readFile(file, 'utf8', (err)=>{
              err ? console.error(err): null;
              createSongFiles(file);
              console.count(`if artist, send to create song file ${file.split('/').pop()}`)
            })
          } else {
            html2txt(file);
          };
        });

      } catch (e) {
        console.error(e.message);
      }
    });
  }).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
  });

}


function html2txt(filePath) {
  console.count('html2txt');
  fs.readFile(filePath, 'utf8', dataLoaded);

  function dataLoaded(err, data) {
    if (err) { console.error(err) }

    $ = cheerio.load('' + data + '');
    let cleanedLyrics = $(".lyric-box").text().replace(/Edit Lyrics/, "").replace(/Edit Wiki/, "").replace(/Add Video/, "").replace(/\/s+/, " ").trim();

    let txtFile = path.join(__dirname, "public", "canned", filePath.split('/').pop().replace(/html/, "txt"));
    fs.writeFile(txtFile, cleanedLyrics, (err) => {
     if (err) {
       console.error(err)
      } else {
        console.info(`Lyrics Written for ${txtFile.split('/').pop()}`); 
        deleteHTML(filePath);
    }
  })
  }

};

function createSongFiles(artistHTML) {
  console.count('createSongFiles');
  let slugs = [];
  let folder = "tns";
  let type = "song";

  //getUrls of songs
  fs.readFile(artistHTML, 'utf8', dataLoaded);

  function dataLoaded(err, data) {
    if (err) {
      console.log(err)
    }
    $ = cheerio.load('' + data + '');

    function dasLoop() {
      console.count('dasLoop');

      $("#songslist a").attr('class', '').each((i, elem) => {
        if (i) {
          let url = `https:${elem.attribs.href}`;
          let name = elem.children[0].data.trim().replace(/\s+/g, " ");
          console.log('name', name)
          if (
            (Number.isNaN(Number(name)))
          ) {
            // Create files
            console.log('url in 131', url)
            saveHtml(url, { folder, name, type });
            slugs.push(
              {
                slug: name,
                title: name,
                artist: "TnS",
                group: "TnS",
                dropdown: true
              })
          }

        }
      });
      return slugs;
    };
    dasLoop();
    if (slugs.length > 0) {
      let location = path.join(__dirname, "artistHTML", "artistSlugs.js");
      fs.writeFile(location, JSON.stringify(slugs), (err) => {
        console.info(`${location.split('/').pop()} written`);
      })
    }
  }

}