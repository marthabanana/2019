# abr-2018

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

---

## How to update Content

### about

Images: Upload in `src/about/images`

Text: Edit `src/about/index.js`

### activities

**Create a new activity**

1. Create a new file in `src/activities/fixtures`. Best to copy & update `src/activities/fixtures/sample-activity.js`.
2. The new file should only contain alphanumeric latin characters (no spaces).
3. Upload a new image in `src/activities/images`. Best to have the same file name as the fixture file (eg. `sample-activity.jpg` or `sample-activity.png`)

### artists

**Create a new artist**

1. Create a new file in `src/artists/fixtures`. Best to copy & update `src/artists/fixtures/sample-artist.js`.
2. The new file should only contain alphanumeric latin characters (no spaces).
3. Upload a new image in `src/artists/images`. Best to have the same file name as the fixture file (eg. `sample-artist.jpg` or `sample-artist.png`)

### directions

**Update the Google map image**

1. Take a screenshot from Google Maps. `1920x680` is the current size.
2. Name the file `google-map.png`
3. Upload the image in `src/directions/images`.
4. Update `src/directions/index.js` line 67, the value of `href` should be the Google Maps link to the new location.

**Update the directions image**

(Not sure if we need this)

1. Name the file `directions.png`
2. Upload the image in `src/directions/images`


**Update the text**

1. Change `src/directions/index.js`

## guide

**Preview Text**

1. Update `src/guide/index.js`

**Camping Text and Image**

1. Update `src/guide/camping.js`
2. Upload a new image in `src/guide/images`. The file should be named `camping.jpg`.

**Environment Text and Image**

1. Update `src/guide/environment.js`
2. Upload a new image in `src/guide/images`. The file should be named `environment.jpg`.

**Food & Drinks Text and Image**

1. Update `src/guide/menu.js`
2. Upload a new image in `src/guide/images`. The file should be named `food-drinks.jpg`.

## landing (banner)

Two images are used as the main banner, `landing` and `poster`. `landing` is used for tablet and desktop devices (wide image, landscape, currently `2500x1308`), `poster` is used for mobile devices (narrow image, portrait, currently `845x1200`).

1. Upload new files in `src/landing/images` respectively (`landing.jpg` and `poster.jpg`)

## timetable

**Add and update stages**

1. Update `src/timetable/fixtures.js` following the format of the existing data (eg. `STAGE1`,`STAGE2`, and `STAGE3`)

Example:

```js
export const STAGE3 = {
  name: 'Stage name goes here',
  type: 'activity', // empty for music stages, "activity" for other types of stages
  displayOrder: 2, // the sort order of the stage when shown in the timetable
}
```

**Add slots**

1. Update `src/timetable/fixtures.js` following the format of the existing data.

**NOTE** When adding slots for artists or activities the value of `id` should be the same as the filename used in `src/activities/fixtures` or `src/artists/fixtures` to describe the artist (without the `.js` extension).

Example:

```js
  {
    id: 'sample-artist', // same as the filename of the artist or activity. 
    date: new Date('07/22/2018 18:00'), // month/day/year hour:minute (24hour format)
    stage: STAGE3, // the name of the stage (defined previously), no quotes
  },
```


**Gates Open & Gates Close**

1. Update `src/timetable/index.js` lines 97 & 98.

---

## Facebook Sharing

**Image shown when sharing link to website**

1. Upload a new image in `public/`
2. The image should be named `shared-poster.png`
3. Current size is `625x435`

**Image shown when visitors do not have JS enabled**

1. Upload a new image in `public/`. This can be the same as in `src/landing/poster.jpg`
2. The image should be named `poster.png`
3. Current size is `676x960`




