// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "study",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
      },
      "title": "All",
      "plugins": [
        {
          "type": "fullscreen",
          "message": "この実験はフルスクリーンモードで行います。",
          "hint": "ここをクリックしてください。",
          "path": "lab.plugins.Fullscreen"
        }
      ],
      "content": [
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "本実験の目的",
              "content": "「人間の認知機能について調べることが目的です」という実験実習を行うことが目的です。"
            },
            {
              "required": true,
              "type": "text",
              "title": "「心的回転実験」の手続き",
              "content": "2つの図形が左右に提示されます。それらが同じ図形の場合は右手の人差し指で【J】のキーを，異なる図形の場合は左手の人差し指【F】のキーを，できるだけ早く押してください。その後，次の図形対が提示されます。"
            },
            {
              "required": true,
              "type": "text",
              "title": "潜在的なリスク・苦痛など",
              "content": "実験による多少の疲労を除き，潜在的なリスクや苦痛はありません。また，いつ，いかなる理由でも自由に実験を中止していただけます。\n（という情報も実験参加者に与える必要がありますが，今回は実験を否応なく実施してください！）"
            },
            {
              "required": true,
              "type": "radio",
              "options": [
                {
                  "label": "同意した上で実験に参加する。",
                  "coding": "informedConsent"
                }
              ],
              "label": "参加に同意していただけますか？",
              "name": "informedConsent"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "continue→",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
          },
          "title": "Informed Consent"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "まず，練習を行います。全部で6試行あります。",
              "content": "下の「練習試行へ」のボタンを押すと，3秒のカウントダウンが始まり，練習試行に入ります。"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "練習試行へ →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
          },
          "title": "Inst"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 60,
              "height": 67.8,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "３",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "60",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
          },
          "title": "3",
          "timeout": "1000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 60,
              "height": 67.8,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "２",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "60",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
          },
          "title": "2",
          "timeout": "1000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 60,
              "height": 67.8,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "１",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "60",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
          },
          "title": "1",
          "timeout": "1000"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "img": "MD0",
              "match": "match"
            },
            {
              "img": "MD20",
              "match": "match"
            },
            {
              "img": "MD-20",
              "match": "match"
            },
            {
              "img": "MD40",
              "match": "match"
            },
            {
              "img": "MD-40",
              "match": "match"
            },
            {
              "img": "MD60",
              "match": "match"
            },
            {
              "img": "MD-60",
              "match": "match"
            },
            {
              "img": "MD80",
              "match": "match"
            },
            {
              "img": "MD-80",
              "match": "match"
            },
            {
              "img": "MD100",
              "match": "match"
            },
            {
              "img": "MD-100",
              "match": "match"
            },
            {
              "img": "MD120",
              "match": "match"
            },
            {
              "img": "MD-120",
              "match": "match"
            },
            {
              "img": "MD140",
              "match": "match"
            },
            {
              "img": "MD-140",
              "match": "match"
            },
            {
              "img": "MD160",
              "match": "match"
            },
            {
              "img": "MD-160",
              "match": "match"
            },
            {
              "img": "MD180",
              "match": "match"
            },
            {
              "img": "UD0",
              "match": "unmatch"
            },
            {
              "img": "UD20",
              "match": "unmatch"
            },
            {
              "img": "UD-20",
              "match": "unmatch"
            },
            {
              "img": "UD40",
              "match": "unmatch"
            },
            {
              "img": "UD-40",
              "match": "unmatch"
            },
            {
              "img": "UD60",
              "match": "unmatch"
            },
            {
              "img": "UD-60",
              "match": "unmatch"
            },
            {
              "img": "UD80",
              "match": "unmatch"
            },
            {
              "img": "UD-80",
              "match": "unmatch"
            },
            {
              "img": "UD100",
              "match": "unmatch"
            },
            {
              "img": "UD-100",
              "match": "unmatch"
            },
            {
              "img": "UD120",
              "match": "unmatch"
            },
            {
              "img": "UD-120",
              "match": "unmatch"
            },
            {
              "img": "UD140",
              "match": "unmatch"
            },
            {
              "img": "UD-140",
              "match": "unmatch"
            },
            {
              "img": "UD160",
              "match": "unmatch"
            },
            {
              "img": "UD-160",
              "match": "unmatch"
            },
            {
              "img": "UD180",
              "match": "unmatch"
            },
            {
              "img": "MP0",
              "match": "match"
            },
            {
              "img": "MP20",
              "match": "match"
            },
            {
              "img": "MP-20",
              "match": "match"
            },
            {
              "img": "MP40",
              "match": "match"
            },
            {
              "img": "MP-40",
              "match": "match"
            },
            {
              "img": "MP60",
              "match": "match"
            },
            {
              "img": "MP-60",
              "match": "match"
            },
            {
              "img": "MP80",
              "match": "match"
            },
            {
              "img": "MP-80",
              "match": "match"
            },
            {
              "img": "MP100",
              "match": "match"
            },
            {
              "img": "MP-100",
              "match": "match"
            },
            {
              "img": "MP120",
              "match": "match"
            },
            {
              "img": "MP-120",
              "match": "match"
            },
            {
              "img": "MP140",
              "match": "match"
            },
            {
              "img": "MP-140",
              "match": "match"
            },
            {
              "img": "MP160",
              "match": "match"
            },
            {
              "img": "MP-160",
              "match": "match"
            },
            {
              "img": "MP180",
              "match": "match"
            },
            {
              "img": "UP0",
              "match": "unmatch"
            },
            {
              "img": "UP20",
              "match": "unmatch"
            },
            {
              "img": "UP-20",
              "match": "unmatch"
            },
            {
              "img": "UP40",
              "match": "unmatch"
            },
            {
              "img": "UP-40",
              "match": "unmatch"
            },
            {
              "img": "UP60",
              "match": "unmatch"
            },
            {
              "img": "UP-60",
              "match": "unmatch"
            },
            {
              "img": "UP80",
              "match": "unmatch"
            },
            {
              "img": "UP-80",
              "match": "unmatch"
            },
            {
              "img": "UP100",
              "match": "unmatch"
            },
            {
              "img": "UP-100",
              "match": "unmatch"
            },
            {
              "img": "UP120",
              "match": "unmatch"
            },
            {
              "img": "UP-120",
              "match": "unmatch"
            },
            {
              "img": "UP140",
              "match": "unmatch"
            },
            {
              "img": "UP-140",
              "match": "unmatch"
            },
            {
              "img": "UP160",
              "match": "unmatch"
            },
            {
              "img": "UP-160",
              "match": "unmatch"
            },
            {
              "img": "UP180",
              "match": "unmatch"
            }
          ],
          "sample": {
            "mode": "draw-shuffle",
            "n": "6"
          },
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "Practice",
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {},
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
            },
            "title": "Trial",
            "content": [
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "image",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 447,
                    "height": 258,
                    "stroke": null,
                    "strokeWidth": 0,
                    "fill": "black",
                    "src": "${ this.files[\"fix.png\"] }"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {
                  "fix.png": "embedded\u002F38867e26a3b1620b6cbf759c8912af62919dab405558bb69b666908f93475216.png"
                },
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
                },
                "title": "Fix",
                "timeout": "300"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
                },
                "title": "Blank",
                "timeout": "500"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "image",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 447,
                    "height": 258,
                    "stroke": null,
                    "strokeWidth": 0,
                    "fill": "black",
                    "src": "${ this.files[ parameters.img + \".png\"] }"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {
                  "MD0.png": "embedded\u002Fecd1d27a08185a8265e0ea7fa88d6cfb4f2860724aeabbadaab02c1a26d72e99.png",
                  "MD20.png": "embedded\u002Fcacd3a1bdc1e900694f41dac51c12353b22e29417d35e900efc279c4bc3e53af.png",
                  "MD-20.png": "embedded\u002Fd095eaa5b15261f0fd56e809b22a423cc4f9f126f1d26eb882a2d0074485cafe.png",
                  "MD40.png": "embedded\u002Fdaba331ea72a003964e3ef7ddeea4e2535a7cec5904c172e63dd2878bff375f9.png",
                  "MD-40.png": "embedded\u002Fb0047b7d65ce8613b1c2922feaba29649f742cdb1cf8a3cc235a002ae013ed44.png",
                  "MD60.png": "embedded\u002Fdf7b2e5ed2c9f070f2cfeaa13acd8f3571bf9a5ded6fe2093e4b93c3e236aea1.png",
                  "MD-60.png": "embedded\u002F76f41e124ddc7080ec6039f79f61f1b34f922596ead74f678882f240dddf8ad7.png",
                  "MD80.png": "embedded\u002F4da079839b3f1b384a4a98b557e327933456f9ef84e93b1e443ec4c218fefb40.png",
                  "MD-80.png": "embedded\u002Ff96c917f57a9a825c2702a1e637d7cf152810b9e68d8dd9e29298b3a16c68e54.png",
                  "MD100.png": "embedded\u002Fe1880f1546af6041d930dca1cd696d7056010cd48b079b6cd719b8bf2f9a2046.png",
                  "MD-100.png": "embedded\u002Fb807f2a9cc1bc4fe573fa89c4c8b9afc893a26c94ecde1e630eef45d10ac145f.png",
                  "MD120.png": "embedded\u002Feb56eba2a5ab2d33aab1053a4f90155353c39b30efd0bd17debdc511505f3fe4.png",
                  "MD-120.png": "embedded\u002F2832da77012bb21014cf02ceeed4d6819aa3d4fc8a667d0ca98e1e0fc67ae3f7.png",
                  "MD140.png": "embedded\u002F1592377ec15e435b719b706ffb1bde8aeea1a2d2bee138884401d636532693b7.png",
                  "MD-140.png": "embedded\u002F9498b33db64eab7b74323e2eb29440a2fd481c052476f2eed983e09f718b6d31.png",
                  "MD160.png": "embedded\u002F6f85820bf29b832ea09d953c28a25e1eecf12b8138e0b17f7351ef93246f3939.png",
                  "MD-160.png": "embedded\u002F2f04df4853ad1ace2c1cadb25dc5e26734de258ad57b0735f609af41109d22ab.png",
                  "MD180.png": "embedded\u002F5bfbda7f74555da28da16833411516d1855b9e66deda973641ada6cf04c0b25a.png",
                  "MP0.png": "embedded\u002Fc5660ddee93b2635351c61f98f007d2378f72b29a9fb6cc967fe324a50dc0834.png",
                  "MP20.png": "embedded\u002F3aedef74269905e7dda48e89f022052986c8a4cf4d2643ad77b4c6073fb6c991.png",
                  "MP-20.png": "embedded\u002Fe777cd83f4763d42181000391a9eb5c79408f5282047c6e09a67ccb98da3aaf0.png",
                  "MP40.png": "embedded\u002F8387153230ce262445cb9c38f61887b8fb2600ca3738e85740e51f205f0d5acb.png",
                  "MP-40.png": "embedded\u002F79c48629195391a3542206c3dc195e28f0e9cfeda8b7529b99b03a4a3de76ff8.png",
                  "MP60.png": "embedded\u002Feccaa50743d3f47922faae26af8a1d065b239e8fdc6f07e31e090aaf04e76546.png",
                  "MP-60.png": "embedded\u002F32e87a59cce2f59265f5a122709c03959aaf57801b6d9d0a6d8c796e4dfccefd.png",
                  "MP80.png": "embedded\u002Fafe5031af988fb477c3bd3f0b4f1280cb827b663363c77872f2330f6c3fdb7ab.png",
                  "MP-80.png": "embedded\u002Fb325e3554da9834e3dc100ef436f2f9cfa17997f1fecaa3d33eb50aac161d1d8.png",
                  "MP100.png": "embedded\u002F5ad83c0896407ad7372fd39815a89849487f043d460645adeb6eccd730ae35ca.png",
                  "MP-100.png": "embedded\u002Fac4c0f87eec61b3a53058ab062fe81f188e0698d4f8260206228b9d914553813.png",
                  "MP120.png": "embedded\u002F1d9ac4b367d397484460fb2277885a5d7885b6b2e792722ef9a8648dfd72be3c.png",
                  "MP-120.png": "embedded\u002Ff0dabb5f65d8c1fd763c210bac291f749bcd5801453e6bb4ab0c4072229c66fd.png",
                  "MP140.png": "embedded\u002Fb04cd6553802c287de3789c6a4c8935da707323ac18b20211c37f8c1638ec200.png",
                  "MP-140.png": "embedded\u002F2379387cfd257bc04ffbd362b356d3610b80ff9eb695cfd99676521e82068433.png",
                  "MP160.png": "embedded\u002F2a0f7e7715938508ca660cfd81c406e3443a229dc6bf27946357204478c74392.png",
                  "MP-160.png": "embedded\u002Fa8fda25305591c50621f78dd95e565c28b2ee46d55c2d9975a99fe569d8a63c2.png",
                  "MP180.png": "embedded\u002Fc0b0cc3b2f592691ee6cce51e49c7e5903d6e91101bd1370d68b104ce2697cdd.png",
                  "UD0.png": "embedded\u002Fa18e7c8cdb5d293c9b425cca1a6a313f9cc7770fb6c5cf961238faed6c3867bf.png",
                  "UD20.png": "embedded\u002F567c532004acccd8761fb58fc1d0a71d4fa83d3ec597dcb220638354bd2a55c7.png",
                  "UD-20.png": "embedded\u002F247aeb2cdf02aac26d348b2da9a21fdc0a72c57e7aa58efc6619ecfc9114a1a2.png",
                  "UD40.png": "embedded\u002F0e076e1723700ef04ba05c884307e81985d8fea589e85bb1df88c2ce88346274.png",
                  "UD-40.png": "embedded\u002F51ac2618f349e47aa465cfb0d00d30daf60b447cee9383192ad300a7d5968dc4.png",
                  "UD60.png": "embedded\u002Fb058e67f8b4c0a6b958a3f2e47ba06493bcdcf2d092f9e3f54041fa3133deb06.png",
                  "UD-60.png": "embedded\u002F83fe5c89ed1ef04101c9d91aac73b2b9f8fa4f7f78edea4dc6f520f58e24e58c.png",
                  "UD80.png": "embedded\u002F74caae83446054d0de92a34610df8d72021a4a1e5d355d37f15c911c653329fb.png",
                  "UD-80.png": "embedded\u002Fb5ff2ab748c346013a73a4ce41e8a9816efa7b5626ae3292873a776e5cc2ee3c.png",
                  "UD100.png": "embedded\u002Fbf5d897a169ed3a518e8ca44c1db57a660fa836d52822370348076511c6538b2.png",
                  "UD-100.png": "embedded\u002F017d8a84e261a5637a0354b9559a5a87645f135a9757362d693bf40d8f92ceeb.png",
                  "UD120.png": "embedded\u002F91ef544c02ceca2e6ad643b0bb2d5e49f5aeccfef08d2c7103b3699855d950ea.png",
                  "UD-120.png": "embedded\u002F4551f9fd36350abb014b921193aba4941b5bb1d1216f105f0c7ec9383b34a6ad.png",
                  "UD140.png": "embedded\u002F7a1789e608db40374f36766f4931e4f401b29d27bd0c4d5e7ed0687c9a25cc61.png",
                  "UD-140.png": "embedded\u002F7063b15e938e6dd8f7c12e192fc0ae4e6633f386d5d46bfeed1e10d40ff5f4b4.png",
                  "UD160.png": "embedded\u002F171818d9862adbc951f66a2157b264e1830c7a0daa277d433baa6240d531dda7.png",
                  "UD-160.png": "embedded\u002F8a1eb1a5397f23e6193e01efa37e73bcc3a76a14f89a0052c9d4a21ba241a59d.png",
                  "UD180.png": "embedded\u002F98a375ee8224e30d38e3a7db432fb7f186d3c6228c44c959fc4bffeb64133c17.png",
                  "UP0.png": "embedded\u002F9950c5ca7178b4240121c21055e1f36268990d00acbf5c341e4dbca292a709b0.png",
                  "UP20.png": "embedded\u002F4f915a4583cfc7e7259d29199d67dfb956d7e1d8f244c44629f5884e83e6b37b.png",
                  "UP-20.png": "embedded\u002F0a538050a6b983d992047413ec29bbc12b5e70a4391bfffbaa473dd283fe43b8.png",
                  "UP40.png": "embedded\u002Ffaf909b9e3671099b932537d7265b0718bd94b3409f22b544534cff1e77f9a20.png",
                  "UP-40.png": "embedded\u002F8c9d54b6851d3934edc41f2191ac36c45088e50e66435c0d5f9148c1d84e6e77.png",
                  "UP60.png": "embedded\u002F260930d524ff255786084aeb0c3235f182fd06f2e6be8eebc2dfeff17e18e830.png",
                  "UP-60.png": "embedded\u002F01c83ba07227943cd607c43f455e07f01db00db6029d3718bc3af0095a6844d4.png",
                  "UP80.png": "embedded\u002F81968a5ea2628b8282d51799f4cb3d3e3e3519ed903ca943b17d7681bbc8443b.png",
                  "UP-80.png": "embedded\u002F953d5f53d9b4415405f7da7fab095aee0fb180d4f702f400987c283812d57b41.png",
                  "UP100.png": "embedded\u002F34a9c074adab1d41effb83dcec140cb4e1e2f06e110f32230a5e69e12c1cd3d4.png",
                  "UP-100.png": "embedded\u002Fdcc667227c795f5c7f66d04017592452498894487b7f50c9bfd3d1088a6f910b.png",
                  "UP120.png": "embedded\u002F90337351ef895c0b0cbac563a57bd2c169a714a07a0d5e8136cb136c52c41f9f.png",
                  "UP-120.png": "embedded\u002Fa61c7d000d279cec1d86f9ccfb988130767a030c1482243ea65b0fc09f323346.png",
                  "UP140.png": "embedded\u002F3170680fcb2e61552adf58f264cc57919c30671cc8b14ddf09ed87190d817299.png",
                  "UP-140.png": "embedded\u002F708cf958364b1843c3b8f5b7b5c4a325748fad60b9da4f3515e00796387fad9e.png",
                  "UP160.png": "embedded\u002F90d39c9208856cd0f52fd342acecac150dc894c4926ebe881de9deedfab61ede.png",
                  "UP-160.png": "embedded\u002F9e4e1fca8e3423c7af0ff4beb8b42077f3d92905e0bdd1c5552a9ac60cc194e8.png",
                  "UP180.png": "embedded\u002F1b447d6ea146e45b349f2a8903176ed2793a591d2a2fb576886221363cd46365.png"
                },
                "responses": {
                  "keydown(j)": "match",
                  "keydown(f)": "unmatch"
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Stimuli",
                "correctResponse": "${ parameters.match }"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
                },
                "title": "Blank",
                "timeout": "500"
              }
            ]
          }
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "次から本試行です。全部で72試行あります。",
              "content": "下の「本試行へ」のボタンを押すと，3秒のカウントダウンが始まり，練習試行に入ります。"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "本試行へ →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
          },
          "title": "Inst"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 60,
              "height": 67.8,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "３",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "60",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
          },
          "title": "3",
          "timeout": "1000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 60,
              "height": 67.8,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "２",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "60",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
          },
          "title": "2",
          "timeout": "1000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 60,
              "height": 67.8,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "１",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "60",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
          },
          "title": "1",
          "timeout": "1000"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "img": "MD0",
              "match": "match"
            },
            {
              "img": "MD20",
              "match": "match"
            },
            {
              "img": "MD-20",
              "match": "match"
            },
            {
              "img": "MD40",
              "match": "match"
            },
            {
              "img": "MD-40",
              "match": "match"
            },
            {
              "img": "MD60",
              "match": "match"
            },
            {
              "img": "MD-60",
              "match": "match"
            },
            {
              "img": "MD80",
              "match": "match"
            },
            {
              "img": "MD-80",
              "match": "match"
            },
            {
              "img": "MD100",
              "match": "match"
            },
            {
              "img": "MD-100",
              "match": "match"
            },
            {
              "img": "MD120",
              "match": "match"
            },
            {
              "img": "MD-120",
              "match": "match"
            },
            {
              "img": "MD140",
              "match": "match"
            },
            {
              "img": "MD-140",
              "match": "match"
            },
            {
              "img": "MD160",
              "match": "match"
            },
            {
              "img": "MD-160",
              "match": "match"
            },
            {
              "img": "MD180",
              "match": "match"
            },
            {
              "img": "UD0",
              "match": "unmatch"
            },
            {
              "img": "UD20",
              "match": "unmatch"
            },
            {
              "img": "UD-20",
              "match": "unmatch"
            },
            {
              "img": "UD40",
              "match": "unmatch"
            },
            {
              "img": "UD-40",
              "match": "unmatch"
            },
            {
              "img": "UD60",
              "match": "unmatch"
            },
            {
              "img": "UD-60",
              "match": "unmatch"
            },
            {
              "img": "UD80",
              "match": "unmatch"
            },
            {
              "img": "UD-80",
              "match": "unmatch"
            },
            {
              "img": "UD100",
              "match": "unmatch"
            },
            {
              "img": "UD-100",
              "match": "unmatch"
            },
            {
              "img": "UD120",
              "match": "unmatch"
            },
            {
              "img": "UD-120",
              "match": "unmatch"
            },
            {
              "img": "UD140",
              "match": "unmatch"
            },
            {
              "img": "UD-140",
              "match": "unmatch"
            },
            {
              "img": "UD160",
              "match": "unmatch"
            },
            {
              "img": "UD-160",
              "match": "unmatch"
            },
            {
              "img": "UD180",
              "match": "unmatch"
            },
            {
              "img": "MP0",
              "match": "match"
            },
            {
              "img": "MP20",
              "match": "match"
            },
            {
              "img": "MP-20",
              "match": "match"
            },
            {
              "img": "MP40",
              "match": "match"
            },
            {
              "img": "MP-40",
              "match": "match"
            },
            {
              "img": "MP60",
              "match": "match"
            },
            {
              "img": "MP-60",
              "match": "match"
            },
            {
              "img": "MP80",
              "match": "match"
            },
            {
              "img": "MP-80",
              "match": "match"
            },
            {
              "img": "MP100",
              "match": "match"
            },
            {
              "img": "MP-100",
              "match": "match"
            },
            {
              "img": "MP120",
              "match": "match"
            },
            {
              "img": "MP-120",
              "match": "match"
            },
            {
              "img": "MP140",
              "match": "match"
            },
            {
              "img": "MP-140",
              "match": "match"
            },
            {
              "img": "MP160",
              "match": "match"
            },
            {
              "img": "MP-160",
              "match": "match"
            },
            {
              "img": "MP180",
              "match": "match"
            },
            {
              "img": "UP0",
              "match": "unmatch"
            },
            {
              "img": "UP20",
              "match": "unmatch"
            },
            {
              "img": "UP-20",
              "match": "unmatch"
            },
            {
              "img": "UP40",
              "match": "unmatch"
            },
            {
              "img": "UP-40",
              "match": "unmatch"
            },
            {
              "img": "UP60",
              "match": "unmatch"
            },
            {
              "img": "UP-60",
              "match": "unmatch"
            },
            {
              "img": "UP80",
              "match": "unmatch"
            },
            {
              "img": "UP-80",
              "match": "unmatch"
            },
            {
              "img": "UP100",
              "match": "unmatch"
            },
            {
              "img": "UP-100",
              "match": "unmatch"
            },
            {
              "img": "UP120",
              "match": "unmatch"
            },
            {
              "img": "UP-120",
              "match": "unmatch"
            },
            {
              "img": "UP140",
              "match": "unmatch"
            },
            {
              "img": "UP-140",
              "match": "unmatch"
            },
            {
              "img": "UP160",
              "match": "unmatch"
            },
            {
              "img": "UP-160",
              "match": "unmatch"
            },
            {
              "img": "UP180",
              "match": "unmatch"
            }
          ],
          "sample": {
            "mode": "draw-shuffle"
          },
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "MR_task",
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {},
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
            },
            "title": "Trial",
            "content": [
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "image",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 447,
                    "height": 258,
                    "stroke": null,
                    "strokeWidth": 0,
                    "fill": "black",
                    "src": "${ this.files[\"fix.png\"] }"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {
                  "fix.png": "embedded\u002F38867e26a3b1620b6cbf759c8912af62919dab405558bb69b666908f93475216.png"
                },
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
                },
                "title": "Fix",
                "timeout": "300"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
                },
                "title": "Blank",
                "timeout": "500"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "image",
                    "left": "0",
                    "top": "0",
                    "angle": 0,
                    "width": 447,
                    "height": 258,
                    "stroke": null,
                    "strokeWidth": 0,
                    "fill": "black",
                    "src": "${ this.files[ parameters.img + \".png\"] }"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {
                  "MD0.png": "embedded\u002Fecd1d27a08185a8265e0ea7fa88d6cfb4f2860724aeabbadaab02c1a26d72e99.png",
                  "MD20.png": "embedded\u002Fcacd3a1bdc1e900694f41dac51c12353b22e29417d35e900efc279c4bc3e53af.png",
                  "MD-20.png": "embedded\u002Fd095eaa5b15261f0fd56e809b22a423cc4f9f126f1d26eb882a2d0074485cafe.png",
                  "MD40.png": "embedded\u002Fdaba331ea72a003964e3ef7ddeea4e2535a7cec5904c172e63dd2878bff375f9.png",
                  "MD-40.png": "embedded\u002Fb0047b7d65ce8613b1c2922feaba29649f742cdb1cf8a3cc235a002ae013ed44.png",
                  "MD60.png": "embedded\u002Fdf7b2e5ed2c9f070f2cfeaa13acd8f3571bf9a5ded6fe2093e4b93c3e236aea1.png",
                  "MD-60.png": "embedded\u002F76f41e124ddc7080ec6039f79f61f1b34f922596ead74f678882f240dddf8ad7.png",
                  "MD80.png": "embedded\u002F4da079839b3f1b384a4a98b557e327933456f9ef84e93b1e443ec4c218fefb40.png",
                  "MD-80.png": "embedded\u002Ff96c917f57a9a825c2702a1e637d7cf152810b9e68d8dd9e29298b3a16c68e54.png",
                  "MD100.png": "embedded\u002Fe1880f1546af6041d930dca1cd696d7056010cd48b079b6cd719b8bf2f9a2046.png",
                  "MD-100.png": "embedded\u002Fb807f2a9cc1bc4fe573fa89c4c8b9afc893a26c94ecde1e630eef45d10ac145f.png",
                  "MD120.png": "embedded\u002Feb56eba2a5ab2d33aab1053a4f90155353c39b30efd0bd17debdc511505f3fe4.png",
                  "MD-120.png": "embedded\u002F2832da77012bb21014cf02ceeed4d6819aa3d4fc8a667d0ca98e1e0fc67ae3f7.png",
                  "MD140.png": "embedded\u002F1592377ec15e435b719b706ffb1bde8aeea1a2d2bee138884401d636532693b7.png",
                  "MD-140.png": "embedded\u002F9498b33db64eab7b74323e2eb29440a2fd481c052476f2eed983e09f718b6d31.png",
                  "MD160.png": "embedded\u002F6f85820bf29b832ea09d953c28a25e1eecf12b8138e0b17f7351ef93246f3939.png",
                  "MD-160.png": "embedded\u002F2f04df4853ad1ace2c1cadb25dc5e26734de258ad57b0735f609af41109d22ab.png",
                  "MD180.png": "embedded\u002F5bfbda7f74555da28da16833411516d1855b9e66deda973641ada6cf04c0b25a.png",
                  "MP0.png": "embedded\u002Fc5660ddee93b2635351c61f98f007d2378f72b29a9fb6cc967fe324a50dc0834.png",
                  "MP20.png": "embedded\u002F3aedef74269905e7dda48e89f022052986c8a4cf4d2643ad77b4c6073fb6c991.png",
                  "MP-20.png": "embedded\u002Fe777cd83f4763d42181000391a9eb5c79408f5282047c6e09a67ccb98da3aaf0.png",
                  "MP40.png": "embedded\u002F8387153230ce262445cb9c38f61887b8fb2600ca3738e85740e51f205f0d5acb.png",
                  "MP-40.png": "embedded\u002F79c48629195391a3542206c3dc195e28f0e9cfeda8b7529b99b03a4a3de76ff8.png",
                  "MP60.png": "embedded\u002Feccaa50743d3f47922faae26af8a1d065b239e8fdc6f07e31e090aaf04e76546.png",
                  "MP-60.png": "embedded\u002F32e87a59cce2f59265f5a122709c03959aaf57801b6d9d0a6d8c796e4dfccefd.png",
                  "MP80.png": "embedded\u002Fafe5031af988fb477c3bd3f0b4f1280cb827b663363c77872f2330f6c3fdb7ab.png",
                  "MP-80.png": "embedded\u002Fb325e3554da9834e3dc100ef436f2f9cfa17997f1fecaa3d33eb50aac161d1d8.png",
                  "MP100.png": "embedded\u002F5ad83c0896407ad7372fd39815a89849487f043d460645adeb6eccd730ae35ca.png",
                  "MP-100.png": "embedded\u002Fac4c0f87eec61b3a53058ab062fe81f188e0698d4f8260206228b9d914553813.png",
                  "MP120.png": "embedded\u002F1d9ac4b367d397484460fb2277885a5d7885b6b2e792722ef9a8648dfd72be3c.png",
                  "MP-120.png": "embedded\u002Ff0dabb5f65d8c1fd763c210bac291f749bcd5801453e6bb4ab0c4072229c66fd.png",
                  "MP140.png": "embedded\u002Fb04cd6553802c287de3789c6a4c8935da707323ac18b20211c37f8c1638ec200.png",
                  "MP-140.png": "embedded\u002F2379387cfd257bc04ffbd362b356d3610b80ff9eb695cfd99676521e82068433.png",
                  "MP160.png": "embedded\u002F2a0f7e7715938508ca660cfd81c406e3443a229dc6bf27946357204478c74392.png",
                  "MP-160.png": "embedded\u002Fa8fda25305591c50621f78dd95e565c28b2ee46d55c2d9975a99fe569d8a63c2.png",
                  "MP180.png": "embedded\u002Fc0b0cc3b2f592691ee6cce51e49c7e5903d6e91101bd1370d68b104ce2697cdd.png",
                  "UD0.png": "embedded\u002Fa18e7c8cdb5d293c9b425cca1a6a313f9cc7770fb6c5cf961238faed6c3867bf.png",
                  "UD20.png": "embedded\u002F567c532004acccd8761fb58fc1d0a71d4fa83d3ec597dcb220638354bd2a55c7.png",
                  "UD-20.png": "embedded\u002F247aeb2cdf02aac26d348b2da9a21fdc0a72c57e7aa58efc6619ecfc9114a1a2.png",
                  "UD40.png": "embedded\u002F0e076e1723700ef04ba05c884307e81985d8fea589e85bb1df88c2ce88346274.png",
                  "UD-40.png": "embedded\u002F51ac2618f349e47aa465cfb0d00d30daf60b447cee9383192ad300a7d5968dc4.png",
                  "UD60.png": "embedded\u002Fb058e67f8b4c0a6b958a3f2e47ba06493bcdcf2d092f9e3f54041fa3133deb06.png",
                  "UD-60.png": "embedded\u002F83fe5c89ed1ef04101c9d91aac73b2b9f8fa4f7f78edea4dc6f520f58e24e58c.png",
                  "UD80.png": "embedded\u002F74caae83446054d0de92a34610df8d72021a4a1e5d355d37f15c911c653329fb.png",
                  "UD-80.png": "embedded\u002Fb5ff2ab748c346013a73a4ce41e8a9816efa7b5626ae3292873a776e5cc2ee3c.png",
                  "UD100.png": "embedded\u002Fbf5d897a169ed3a518e8ca44c1db57a660fa836d52822370348076511c6538b2.png",
                  "UD-100.png": "embedded\u002F017d8a84e261a5637a0354b9559a5a87645f135a9757362d693bf40d8f92ceeb.png",
                  "UD120.png": "embedded\u002F91ef544c02ceca2e6ad643b0bb2d5e49f5aeccfef08d2c7103b3699855d950ea.png",
                  "UD-120.png": "embedded\u002F4551f9fd36350abb014b921193aba4941b5bb1d1216f105f0c7ec9383b34a6ad.png",
                  "UD140.png": "embedded\u002F7a1789e608db40374f36766f4931e4f401b29d27bd0c4d5e7ed0687c9a25cc61.png",
                  "UD-140.png": "embedded\u002F7063b15e938e6dd8f7c12e192fc0ae4e6633f386d5d46bfeed1e10d40ff5f4b4.png",
                  "UD160.png": "embedded\u002F171818d9862adbc951f66a2157b264e1830c7a0daa277d433baa6240d531dda7.png",
                  "UD-160.png": "embedded\u002F8a1eb1a5397f23e6193e01efa37e73bcc3a76a14f89a0052c9d4a21ba241a59d.png",
                  "UD180.png": "embedded\u002F98a375ee8224e30d38e3a7db432fb7f186d3c6228c44c959fc4bffeb64133c17.png",
                  "UP0.png": "embedded\u002F9950c5ca7178b4240121c21055e1f36268990d00acbf5c341e4dbca292a709b0.png",
                  "UP20.png": "embedded\u002F4f915a4583cfc7e7259d29199d67dfb956d7e1d8f244c44629f5884e83e6b37b.png",
                  "UP-20.png": "embedded\u002F0a538050a6b983d992047413ec29bbc12b5e70a4391bfffbaa473dd283fe43b8.png",
                  "UP40.png": "embedded\u002Ffaf909b9e3671099b932537d7265b0718bd94b3409f22b544534cff1e77f9a20.png",
                  "UP-40.png": "embedded\u002F8c9d54b6851d3934edc41f2191ac36c45088e50e66435c0d5f9148c1d84e6e77.png",
                  "UP60.png": "embedded\u002F260930d524ff255786084aeb0c3235f182fd06f2e6be8eebc2dfeff17e18e830.png",
                  "UP-60.png": "embedded\u002F01c83ba07227943cd607c43f455e07f01db00db6029d3718bc3af0095a6844d4.png",
                  "UP80.png": "embedded\u002F81968a5ea2628b8282d51799f4cb3d3e3e3519ed903ca943b17d7681bbc8443b.png",
                  "UP-80.png": "embedded\u002F953d5f53d9b4415405f7da7fab095aee0fb180d4f702f400987c283812d57b41.png",
                  "UP100.png": "embedded\u002F34a9c074adab1d41effb83dcec140cb4e1e2f06e110f32230a5e69e12c1cd3d4.png",
                  "UP-100.png": "embedded\u002Fdcc667227c795f5c7f66d04017592452498894487b7f50c9bfd3d1088a6f910b.png",
                  "UP120.png": "embedded\u002F90337351ef895c0b0cbac563a57bd2c169a714a07a0d5e8136cb136c52c41f9f.png",
                  "UP-120.png": "embedded\u002Fa61c7d000d279cec1d86f9ccfb988130767a030c1482243ea65b0fc09f323346.png",
                  "UP140.png": "embedded\u002F3170680fcb2e61552adf58f264cc57919c30671cc8b14ddf09ed87190d817299.png",
                  "UP-140.png": "embedded\u002F708cf958364b1843c3b8f5b7b5c4a325748fad60b9da4f3515e00796387fad9e.png",
                  "UP160.png": "embedded\u002F90d39c9208856cd0f52fd342acecac150dc894c4926ebe881de9deedfab61ede.png",
                  "UP-160.png": "embedded\u002F9e4e1fca8e3423c7af0ff4beb8b42077f3d92905e0bdd1c5552a9ac60cc194e8.png",
                  "UP180.png": "embedded\u002F1b447d6ea146e45b349f2a8903176ed2793a591d2a2fb576886221363cd46365.png"
                },
                "responses": {
                  "keydown(j)": "match",
                  "keydown(f)": "unmatch"
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Stimuli",
                "correctResponse": "${ parameters.match }"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [],
                "viewport": [
                  800,
                  600
                ],
                "files": {
                  "blank.png": "embedded\u002F624947e91acf2b6beb48b4f375f401a9cdf48805bcad05d315a1406fb8266127.png"
                },
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
                },
                "title": "Blank",
                "timeout": "500"
              }
            ]
          }
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "以上で終了です。",
              "content": "下の「データファイル」というボタンを押すと，画面の上側に「Download Data」というバーが現れます。\nこのバーをクリックすると，データファイルがダウンロードされます。"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "データファイル →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
          },
          "title": "Page"
        }
      ]
    }
  ]
})

// Let's go!
study.run()