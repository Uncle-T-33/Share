# Index

- [Download #1](#download-1)
- [Download #2](#download-2)
- [Shopee filter sale 1k](#shopee-filter-sale-1k)

<br />

---

<br />

## [Download #1](#index)

> ```javascript
> try {
>   const res = await axios({
>     method: "get",
>     url: "/api/vi/get/",
>     params: data,
>     responseType: "blob",
>     headers: { "Content-Type": "multipart/form-data" },
>   });
>
>   if (!window.navigator.msSaveOrOpenBlob) {
>     const url = window.URL.craeteObjectURL(
>       new Blob(res.data, { type: res.headers["content-type"] })
>     );
>     const link = document.createElement("a");
>     link.href = url;
>     link.setAttribute("download", `${title}.png`);
>     document.body.appendChild(link);
>     link.click();
>   } else {
>     window.navigator.msSaveOrOpenBlob(new Blob(res.data), `${title}.png`);
>   }
> } catch (error) {
>   console.log(error);
> }
> ```

## [Download #2](#index)

> ```javascript
> const multipDownload = (idList) => {
>   let id = idList[0].id;
>   let url = "download/" + id;
>   let type = "text/html";
>   if (idList.length > 1) {
>     for (let index = 1; index < idList.length; index++) {
>       id += "," + idList[index].id;
>       url = "multi-download/" + id;
>       type = "application/zip";
>     }
>   }
>   return new Promise((resolve, reject) => {
>     client
>       .get(url, { responseType: "blob" })
>       .then((res) => {
>         //IE
>         if (window.navigator && window.navigator.msSaveOrOpenBlob) {
>           let blob = new Blob([res.data], { type: type });
>           let fileName = res.headers["content-language"];
>           window.navigator.msSaveOrOpenBlob(blob, fileName);
>         } else {
>           const link = document.createElement("a");
>           link.href = window.URL.craeteObjectURL(
>             new Blob([res.data], { type: type })
>           );
>           link.setAttribute("download", res.headers["content-language"]);
>           document.body.appendChild(link);
>           link.click();
>         }
>       })
>       .catch((error) => {
>         if (!error.res) console.log("Error: Network Error");
>         else console.log(error.res.data.message);
>         reject(new Error("No data!"));
>       });
>   });
> };
> ```

## [Shopee filter sale 1k](#index)

> ```javascript
> promoId = 2039645794;
> catId = 12;
> filterLocation = "TP. Hồ Chí Minh";
> itemInfo = [];
>
> function getInfo(itemId) {
>   fetch("https://shopee.vn/api/v2/flash_sale/flash_sale_batch_get_items", {
>     headers: {
>       accept: "application/json",
>       "accept-language": "vi",
>       "content-type": "application/json",
>       "if-none-match-": "55b03-c9b9fb25684b2b06733c64898f2b3197",
>       "sec-fetch-dest": "empty",
>       "sec-fetch-mode": "cors",
>       "sec-fetch-site": "same-origin",
>       "x-api-source": "rweb",
>       "x-csrftoken": "A0O24HgbOXbamkLtd1BV8OVFrcXOwzjY",
>       "x-kl-ajax-request": "Ajax_Request",
>       "x-requested-with": "XMLHttpRequest",
>       "x-shopee-language": "vi",
>     },
>     referrer:
>       "https://shopee.vn/flash_sale?categoryId=" +
>       catId +
>       "&promotionId=" +
>       promoId,
>     referrerPolicy: "no-referrer-when-downgrade",
>     body:
>       '{"promotionid":' +
>       promoId +
>       ',"categoryid":' +
>       catId +
>       ',"itemids":[' +
>       itemId +
>       '],"sort_soldout":false,"limit":1,"need_personalize":true,"with_dp_items":true}',
>     method: "POST",
>     mode: "cors",
>     credentials: "include",
>   })
>     .then((res) => res.json())
>     .then((res) =>
>       fetch(
>         "https://shopee.vn/api/v4/product/get_shop_info?shopid=" +
>           res.data.items[0].shopid,
>         {
>           headers: {
>             "if-none-match-": "55b03-04c5bdaf20c828eb55cb80722d3c1345",
>             "x-api-source": "rweb",
>             "x-kl-ajax-request": "Ajax_Request",
>             "x-requested-with": "XMLHttpRequest",
>             "x-shopee-language": "vi",
>           },
>           referrer: "https://shopee.vn",
>           referrerPolicy: "no-referrer-when-downgrade",
>           body: null,
>           method: "GET",
>           mode: "cors",
>           credentials: "omit",
>         }
>       )
>         .then((res2) => res2.json())
>         .then((res2) => {
>           if (res2.data.shop_location === filterLocation) {
>             try {
>               itemInfo.push(
>                 res.data.items[0].name +
>                   "\nhttps://shopee.vn/--i." +
>                   res.data.items[0].shopid +
>                   "." +
>                   res.data.items[0].itemid
>               );
>             } catch {
>               console.log(res, res2);
>             }
>           }
>         })
>     );
> }
>
> fetch(
>   "https://shopee.vn/api/v2/flash_sale/get_all_itemids?need_personalize=true&promotionid=" +
>     promoId +
>     "&sort_soldout=true",
>   {
>     headers: {
>       "if-none-match-": "55b03-37978ba777260c0cc75251500cc32609",
>       "x-api-source": "rweb",
>       "x-kl-ajax-request": "Ajax_Request",
>       "x-requested-with": "XMLHttpRequest",
>       "x-shopee-language": "vi",
>     },
>     referrer:
>       "https://shopee.vn/flash_sale?categoryId=" +
>       catId +
>       "&promotionId=" +
>       promoId,
>     referrerPolicy: "no-referrer-when-downgrade",
>     body: null,
>     method: "GET",
>     mode: "cors",
>     credentials: "omit",
>   }
> )
>   .then((res) => res.json())
>   .then((res) =>
>     res.data.item_brief_list
>       .filter((x) => x.catid === catId)
>       .map((x) => x.itemid)
>       .forEach((id) => getInfo(id))
>   );
>
> // Chờ từ 3-5s để các request done hết, sau đó gõ vào Console:
> // copy(itemInfo.join("\n\n"))
> ```
