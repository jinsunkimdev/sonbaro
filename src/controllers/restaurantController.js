import axios from "axios";
import 'dotenv/config';
import geoip from "geoip-lite";
import jsdom from "jsdom";
let restaurants=[];
export const location = (req, res) => { 
  res.render("location", {pageTitle: "Location"});
};
export const trending = (req, res) => {
  const latitude = req.query.lat;
  const longitude = req.query.lng;
  console.log(`From trending: ${latitude}, ${longitude}`);
   axios
   .get(process.env.SEARCH_END_POINT, {
     params: {
      key: process.env.RECRUIT_API_KEY,
          lat: latitude,
          lng: longitude,
          range: 3, // 検索範囲（半径3km）
          format: 'json'
     }
   }).then(response => {
       restaurants = response.data.results.shop;
       console.log(restaurants[0])
       restaurants = restaurants[0]
       res.render("Home", {pageTitle: "Home",restaurants});
       // レストラン情報を処理する必要がある場合はここで行います
     })
     .catch(error => {
       console.error(error);
       res.status(500).send(error);
     })
} 
export const detail =(req, res) => {
    const {id} = req.params;
     axios
     .get(process.env.SEARCH_END_POINT, {
       params: {
        id: id,
        key: process.env.RECRUIT_API_KEY,
         // lat: latitude,
         // lng: longitude,
        //  range: 3, // 検索範囲（半径3km）
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