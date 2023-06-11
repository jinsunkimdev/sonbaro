
import 'dotenv/config';
import axios from 'axios';
let restaurants = [];
let lat,lng = 0;
let range;
export const getTrending = (req, res) => {
  // Get the latitude and longitude from the request query parameters
   lat = req.query.lat;
   lng = req.query.lng;
  lat= parseFloat(lat).toFixed(6).toString();
  lng= parseFloat(lng).toFixed(6).toString();
  console.log("lat,lng=",lat, lng)
  // range = req.body.range;
  if(range == undefined && range == null && range == 0){
    range = 3;
  }
  console.log(`get range=${range}`);
    //get data from api
     axios.get(process.env.SEARCH_END_POINT, {
      params: {
          key: process.env.RECRUIT_API_KEY,
          lat: lat,
          lng: lng,
          range: range, // 検索範囲（半径3km）
          format: 'json'
      }
    }).then(response => {
       restaurants = response.data.results.shop;
      //  console.log(restaurants)
      })
      .catch(error => {
        console.error(error);
        res.status(500).send(error);
      })
      res.render("home", {pageTitle: "Home", restaurants});
};
export const postTrending = (req, res) => {
  lat = req.query.lat;
  lng = req.query.lng;
 lat= parseFloat(lat).toFixed(6).toString();
 lng= parseFloat(lng).toFixed(6).toString();
 console.log("lat,lng=",lat, lng)
 range = req.body.range;
 if(range == undefined && range == null && range == 0){
   range = 3;
 }
  axios.get(process.env.SEARCH_END_POINT, {
    params: {
      key: process.env.RECRUIT_API_KEY,
      lat: lat,
      lng: lng,
      range: range,
      format: 'json'
    }
  })
    .then(response => {
      restaurants = response.data.results.shop;
      console.log(restaurants)
    })
    .catch(error => {
      console.error(error);
      res.status(500).send(error);
    });
      res.render("home", {pageTitle: "Home", restaurants});
};











export const detail =(req, res) => {
    const {id} = req.params;
     axios
     .get(process.env.SEARCH_END_POINT, {
       params: {
        id: id,
        key: process.env.RECRUIT_API_KEY,
        format: 'json'
       }
     }).then(response => {
         restaurants = response.data.results.shop;
         console.log(restaurants[0])
         res.render("detail", {pageTitle: `${restaurants[0].name}`,restaurants: restaurants[0]});
       })
       .catch(error => {
         console.error(error);
         res.status(500).send(error);
       })
};
export const comments = (req, res) => {
    res.send("Comments Restaurant");
};
export const search = (req, res) => {
    res.send("Search Restaurant");
};