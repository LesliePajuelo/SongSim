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


// saveHtml(artistUrl, { folder: "artistHTML", name: 'tns.html' }, cleanHTML)
// createSongFiles('tns.html')
cleanHTML("/Users/lesliepajuelo/work/SongSim/tns/100x.html", deleteHTML);
function deleteHTML(filePath) {
  fs.unlink(filePath, (err)=>{
    err ? console.err(err) : console.info(`${filePath.split('/').pop} was deleted`);
  })
}
function saveHtml(url, options, cleanHTML) {

  let { folder, name } = options;
  let file = path.join(__dirname, folder, `${name}.html`);

  https.get(url, (res) => {
    const { statusCode } = res;
    const contentType = res.headers['content-type'];

    let error;
    if (statusCode !== 200) {
      error = new Error('Request Failed.\n' +
        `Status Code: ${statusCode}`);
    }

    if (error) {
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
          console.info('The file has been saved!');
        });

      } catch (e) {
        console.error(e.message);
      }
    });
  }).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
  });

  cleanHTML(file);
}


function cleanHTML(filePath, deleteHTML) {
  fs.readFile(filePath, 'utf8', dataLoaded);

  function dataLoaded(err, data) {
    if (err) { console.error(err) }

    let lyrics = "";
    $ = cheerio.load('' + data + '');
    let cleanedLyrics = $(".lyric-box").text().replace(/Edit Lyrics/, "").replace(/Edit Wiki/, "").replace(/Add Video/, "").replace(/\/s+/, " ").trim();

    txtFile = filePath.replace(/html/, "txt");
    fs.writeFile(txtFile, cleanedLyrics, (err) => {
     if (err) {
       console.error(err)
      } else {
        console.info("Lyrics Written"); 
        deleteHTML(filePath);
    }
  })
  }

};

function createSongFiles(artistHTML) {
  let slugs = [];

  let file = path.join(__dirname, "artistHTML", artistHTML);
  //getUrls of songs
  fs.readFile(file, 'utf8', dataLoaded);

  function dataLoaded(err, data) {
    $ = cheerio.load('' + data + '');

    function dasLoop() {
      $("#songslist a").attr('class', '').each((i, elem) => {
        if (i == 0) {
          let url = `https:${elem.attribs.href}`;
          let name = elem.children[0].data.trim().replace(/\s+/g, " ");
          if (
            (Number.isNaN(Number(name)))
          ) {
            // Create files
            let folder = "tns";
            saveHtml(url, { folder, name }, cleanHTML);
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
        console.info('location written')
      })
    }
  }

}