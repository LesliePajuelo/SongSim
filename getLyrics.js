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
const cheerio = require('cheerio'),

const artistUrl = "https://songmeanings.com/artist/view/songs/7002/";

// {folder, name, type}
// saveHtml(artistUrl, {folder: "artistHTML", name: 'tns.html'})
createSongFiles('tns.html')
function saveHtml (url,options){

    let {folder, name, type} = options;

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
        let file = path.join(__dirname, folder, name)
        fs.writeFile(file, dom, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });

        } catch (e) {
        console.error(e.message);
        }
    });
    }).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
    });
}

function createSongFiles(artistHTML){


fs.readFile('complex.html', 'utf8', dataLoaded);

function dataLoaded(err, data) {
    $ = cheerio.load('' + data + '');
    $('#topLevelWrapper > div').each(function(i, elem) {
        var id = $(elem).attr('id'),
            filename = id + '.html',
            content = $.html(elem);
        fs.writeFile(filename, content, function(err) {
            console.log('Written html to ' + filename);
        });
    });
}

}