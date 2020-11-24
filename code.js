var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["2cac73fb-63cf-496f-b8d2-e130febfc44a","f78788fb-ccf0-4954-8563-efb2e604c31f","c787b323-abe7-4063-a767-b457538e5f31","7daae497-f74a-4588-82ee-3081d73cd4eb","28eb06c7-c1e3-4c12-960b-ae698ce171de","dfc6b60c-65d9-4fc1-a6ee-2e272e52aa64","40dc844e-6d6d-4f61-9ae3-1df681d26de5","14b824d7-bcb5-4f8f-9e7a-98affef70451","b5cabe43-7c09-46f3-aa46-efd4bf0594dc","55ba834c-74ae-40e6-bd02-d55fb530d164","d3f99f2f-4e1c-43c1-b754-479badc95106","0b5857a2-5e00-4b86-8a15-493354cf9bc3","4b035ca8-d4f4-48bf-bf09-d08065a65e1d","e0cc9ee7-1e6e-453a-9b08-dc9b765aa12a","2e69316e-3a31-48a6-812c-08044f5eab8f","2633a182-53d1-4d24-929f-cdca222ed1d4","f595ec72-538f-4eee-a4da-e76b9af9e0ee","0647353b-7f4c-4b52-8c74-b41685c4da35","e420dc57-4f00-4441-b397-1f7387d9733d","a7849697-1ca2-49ae-bf84-7b38b8840126","f46971d2-75cf-41f2-a53d-58563624bf94","7cb5d665-a1b1-493f-b71b-791f76e3285c","84abd742-16f2-42e6-adce-333d65f78860","40f76e43-6dc7-4495-a317-8eb73deff7a5","04cf0342-87b6-4824-8ffd-29f7acfb587d","81eee1ca-b1d2-4fc1-a70b-5179125c2afb","b47737e2-111a-470f-9a3c-b1d162be206c","dd88f67d-9ec8-4a45-a083-88792d351bc9","619fd805-e6e1-4e29-91b8-adb186931928","91b16b83-ee05-43a2-b706-1195707ffa0b","5c7ea446-1c27-432e-909d-bf6470d0e79e","13589c8e-c4d0-4b38-888c-fa5eb98487b2","f43d08fe-e0b0-4475-a40d-aa3662d9ca20","1c5dac7d-539d-4b1c-8019-796050928158","d24ef241-4f1e-459f-bff9-e60b0d217758","2d032e9d-3d29-4dd8-94b9-eabc2e3a872a","f0bd0af1-d757-4042-830a-31b950a62e49","7efa63d0-9022-4183-b402-9f752230af4c","eb57c90d-c27f-4edb-9992-7b29100bbbf8","93a10351-954c-49b5-8e1c-5c7927d28d69","e7220af9-76e2-4600-8964-118595b97faf","4ae5a4ca-a5d6-43b3-8ef7-3a3ed7ee4d2a","989715f0-d401-4722-ba98-7df364919812","61da88ad-3019-4def-b882-6c5e653319f1","8c1e5ba0-ff2f-4ed9-8e76-1fd568b7fa38","07e5b9f5-36e9-425d-be87-7f9486ea16c5","78430074-7053-4303-b8dc-d0e0cea7346c","be709c1f-dff5-4b5a-95df-fca65e4e7ac9","1e7bd7ef-b304-4a84-bd07-2c5a0b561750","7bb87cf7-4eb3-4541-96cb-98bcde656801","52ee99d3-b70c-47a4-a4e4-88f3592ead60","c2fbf7d8-0479-430a-938c-fb06144e67b4","ad3aabba-aa40-4c76-8bc6-c51d3ac89f60","793aab1c-9455-478b-8cb7-cbbdd2c0968c","eb510e39-08eb-4145-a75a-dc25b625e492","7e6a672f-a659-4c74-ab63-dfc5f7ae8556","602df06a-16fd-4fa5-9403-d16802a23c81","503b07c1-5d77-4f41-b752-1ea50495cc3e","2b896f2e-d7b8-4198-aecd-c5f98b6fca1d","226ce7b8-e8fe-4c7b-99c3-29f2f549f29a","ed98f807-c0ee-4310-be14-5fed32dba8a0","574d5b37-ebff-465e-83a3-21f617d125bc","4d8c00bf-e14a-4631-9d9b-a572bb4174f2","d3057b99-dccb-480a-ac79-b15479c203d8","12af157c-2015-48f8-98ba-0aebe312f970","a9deeb4b-e666-46bb-80ff-8b8de3dacbfd","55303fd1-a1b4-4dbc-95a3-3cf1f8709447","7d22396e-44c2-410f-92e8-68fe32d005e5","a3d663ee-401e-4951-a182-adfe3b5cd70c","07b5d56c-65a2-4619-a8bf-65906ab68f39","2b307836-67dc-434e-8bbd-5fef88c3d8be","f3a67942-ac5c-428e-b22d-96051be38957","74c7affa-3293-450b-af0f-f42b729981ff","2a06c9aa-9013-41dd-9cec-24f79e9c44c8","956e8b4b-48b7-4672-9f8f-ffa5ed9e408b","a3bf955f-1d70-4d5c-a730-b6b9a5d04f89","fc0f6888-c44e-45bf-a5b8-e2c6814c7604","b4b17e7f-808f-4be4-8675-7a09251b6e85","8acdee00-26a0-4bec-a675-264eef1ac6ac","26c8ed76-84f4-48f2-97a0-c361eb0aaeb7","104088b6-5e70-416e-8d2e-8e9ddd3d2d17","a4515d18-13a1-4bc2-981c-facf1b8577bd","c319c8be-e943-4701-913c-da74760c17d8","ca19dbc6-2e4c-4c33-a292-19ff48ba251e","b21c56f5-28f5-494a-9b4d-8e8ce70046cc","f408c4c9-8930-4958-8721-c4a43b720c91","3a6d47b0-087a-471f-b87b-a0e5b75d135d","62b4be4d-2b62-40a0-81b1-3a323e763f4a","ac5388f2-6c5f-4b27-b845-f308d1902783","d0a035b3-00ce-44a7-b961-eb8eb9c24826","3ab0d289-a73a-4cb1-8f47-c95a6fb4cc87","640d4410-9884-4ac5-bc1c-df65c99de7dd","80bd57f4-8eca-437a-b11c-eec8313e0cd5","709520a4-6369-4290-b437-1c18e9632b28"],"propsByKey":{"2cac73fb-63cf-496f-b8d2-e130febfc44a":{"name":"hero_idle_right","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"05BsgV6_s8UlIYodl1wN.E5EIu7KFngx","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/2cac73fb-63cf-496f-b8d2-e130febfc44a.png"},"f78788fb-ccf0-4954-8563-efb2e604c31f":{"name":"hero_idle_right_cold","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"Ym3SSGB8QyJB1n316rdeb2KTuKWmcpSu","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/f78788fb-ccf0-4954-8563-efb2e604c31f.png"},"c787b323-abe7-4063-a767-b457538e5f31":{"name":"fluff_1","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":".NhclKlF5X__dwhcy_Z9wIiA0nFsavWP","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/c787b323-abe7-4063-a767-b457538e5f31.png"},"7daae497-f74a-4588-82ee-3081d73cd4eb":{"name":"fluff_1_cage","sourceUrl":null,"frameSize":{"x":60,"y":150},"frameCount":1,"looping":true,"frameDelay":12,"version":"vTHaNnLZR82SwMTy3F3ungiXlJuOQVnM","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":150},"rootRelativePath":"assets/7daae497-f74a-4588-82ee-3081d73cd4eb.png"},"28eb06c7-c1e3-4c12-960b-ae698ce171de":{"name":"hero_idle_right_leaf","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"QX.hWp_LcNAI8pJbEvLEz2ZE4i5eJnyH","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/28eb06c7-c1e3-4c12-960b-ae698ce171de.png"},"dfc6b60c-65d9-4fc1-a6ee-2e272e52aa64":{"name":"hero_idle_right_fire","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"bQPWWg7iqbk.w6QIksoomKUFWBu1qE4T","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/dfc6b60c-65d9-4fc1-a6ee-2e272e52aa64.png"},"40dc844e-6d6d-4f61-9ae3-1df681d26de5":{"name":"hero_idle_left","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"Tr4KV9NG7W6gm1O.4.0Re0Ng3_gaBfpS","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/40dc844e-6d6d-4f61-9ae3-1df681d26de5.png"},"14b824d7-bcb5-4f8f-9e7a-98affef70451":{"name":"hero_idle_left_cold","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"ybOMRKC1d6tQnvKBhBC4wEMsgT1xXLtb","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/14b824d7-bcb5-4f8f-9e7a-98affef70451.png"},"b5cabe43-7c09-46f3-aa46-efd4bf0594dc":{"name":"hero_idle_left_leaf","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"roygUiwjsDfGM2NTAiOljR3BlgKbFxX8","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/b5cabe43-7c09-46f3-aa46-efd4bf0594dc.png"},"55ba834c-74ae-40e6-bd02-d55fb530d164":{"name":"hero_idle_left_fire","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"DCbKycyza2xR9WfCSVCr7Dk73d2D2tYY","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/55ba834c-74ae-40e6-bd02-d55fb530d164.png"},"d3f99f2f-4e1c-43c1-b754-479badc95106":{"name":"hero_walking_right","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":2,"looping":true,"frameDelay":3,"version":".TzsT9PhYqyciC_x2ddq5PXlHbVKNuJN","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":60},"rootRelativePath":"assets/d3f99f2f-4e1c-43c1-b754-479badc95106.png"},"0b5857a2-5e00-4b86-8a15-493354cf9bc3":{"name":"hero_walking_right_cold","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":2,"looping":true,"frameDelay":4,"version":"tibXEkNwB4bFeCLAq.ZeLQs.pTXjtCFd","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":60},"rootRelativePath":"assets/0b5857a2-5e00-4b86-8a15-493354cf9bc3.png"},"4b035ca8-d4f4-48bf-bf09-d08065a65e1d":{"name":"hero_walking_right_leaf","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":2,"looping":true,"frameDelay":3,"version":"XvJCXWS5nz17WF.nAzAHe6_3pO0..fob","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":60},"rootRelativePath":"assets/4b035ca8-d4f4-48bf-bf09-d08065a65e1d.png"},"e0cc9ee7-1e6e-453a-9b08-dc9b765aa12a":{"name":"hero_walking_right_fire","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":2,"looping":true,"frameDelay":4,"version":"aAo52v635GYG6G40YB2pAjYqY94jAySq","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":60},"rootRelativePath":"assets/e0cc9ee7-1e6e-453a-9b08-dc9b765aa12a.png"},"2e69316e-3a31-48a6-812c-08044f5eab8f":{"name":"hero_walking_left","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":2,"looping":true,"frameDelay":3,"version":"F6aQZiRtMoW1UZNdKrM8v.ndFaLj2QSj","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":60},"rootRelativePath":"assets/2e69316e-3a31-48a6-812c-08044f5eab8f.png"},"2633a182-53d1-4d24-929f-cdca222ed1d4":{"name":"hero_walking_left_cold","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":2,"looping":true,"frameDelay":4,"version":"Y7H5DqTphONBPWzBPNQy4_iN7xCMufv5","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":60},"rootRelativePath":"assets/2633a182-53d1-4d24-929f-cdca222ed1d4.png"},"f595ec72-538f-4eee-a4da-e76b9af9e0ee":{"name":"hero_walking_left_leaf","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":2,"looping":true,"frameDelay":4,"version":"C1PvbigvRONjEkLlrI0pqhCJZYD5GrTv","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":60},"rootRelativePath":"assets/f595ec72-538f-4eee-a4da-e76b9af9e0ee.png"},"0647353b-7f4c-4b52-8c74-b41685c4da35":{"name":"hero_walking_left_fire","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":2,"looping":true,"frameDelay":4,"version":"nHNyU_j224deYKgatGv7Mjb2XYwQzz31","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":60},"rootRelativePath":"assets/0647353b-7f4c-4b52-8c74-b41685c4da35.png"},"e420dc57-4f00-4441-b397-1f7387d9733d":{"name":"hero_jumping_right","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":4,"looping":true,"frameDelay":4,"version":"ZIuqIv8T2wZIxGs0fUGVLjfj9w64vUW2","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":60},"rootRelativePath":"assets/e420dc57-4f00-4441-b397-1f7387d9733d.png"},"a7849697-1ca2-49ae-bf84-7b38b8840126":{"name":"hero_jumping_right_cold","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":4,"looping":true,"frameDelay":4,"version":"F2C4EFmZg9VdY0Qp2HV3y0AF8lMVl2Zh","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":60},"rootRelativePath":"assets/a7849697-1ca2-49ae-bf84-7b38b8840126.png"},"f46971d2-75cf-41f2-a53d-58563624bf94":{"name":"hero_jumping_right_leaf","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":6,"looping":true,"frameDelay":3,"version":"Uid.DId5bmKFmMiEBBLopTtekUksL7nC","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":90},"rootRelativePath":"assets/f46971d2-75cf-41f2-a53d-58563624bf94.png"},"7cb5d665-a1b1-493f-b71b-791f76e3285c":{"name":"hero_jumping_left_leaf","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":6,"looping":true,"frameDelay":2,"version":"IvEjuNnn7G.E2lTG1o7Qkskh5GqCsT5C","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":90},"rootRelativePath":"assets/7cb5d665-a1b1-493f-b71b-791f76e3285c.png"},"84abd742-16f2-42e6-adce-333d65f78860":{"name":"hero_jumping_right_fire","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":4,"looping":true,"frameDelay":4,"version":"PxlfcXVDBxeayuNWbSFaFsCByuZnRbVJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":60},"rootRelativePath":"assets/84abd742-16f2-42e6-adce-333d65f78860.png"},"40f76e43-6dc7-4495-a317-8eb73deff7a5":{"name":"hero_jumping_left","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":4,"looping":true,"frameDelay":3,"version":"FIYZNeGzw.iJjnR2e8qf4BBDHvRIBAHX","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":60},"rootRelativePath":"assets/40f76e43-6dc7-4495-a317-8eb73deff7a5.png"},"04cf0342-87b6-4824-8ffd-29f7acfb587d":{"name":"hero_jumping_left_cold","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":4,"looping":true,"frameDelay":4,"version":"Xh5JqGFdOmPHsmGiBooZkvqvQtEFxN6C","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":60},"rootRelativePath":"assets/04cf0342-87b6-4824-8ffd-29f7acfb587d.png"},"81eee1ca-b1d2-4fc1-a70b-5179125c2afb":{"name":"hero_jumping_left_fire","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":4,"looping":true,"frameDelay":4,"version":"cEzpmvrQgfDlUmpcYJOUmdMyQbUpWow6","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":60},"rootRelativePath":"assets/81eee1ca-b1d2-4fc1-a70b-5179125c2afb.png"},"b47737e2-111a-470f-9a3c-b1d162be206c":{"name":"hero_dead","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"gVqDz_pQv8D7hLKXTOphmcBQRH9mte04","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/b47737e2-111a-470f-9a3c-b1d162be206c.png"},"dd88f67d-9ec8-4a45-a083-88792d351bc9":{"name":"hero_dead_cold","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"YiYuTdpy2hvUXVjIF_uubB5rH8RlXbe1","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/dd88f67d-9ec8-4a45-a083-88792d351bc9.png"},"619fd805-e6e1-4e29-91b8-adb186931928":{"name":"hero_sliding_right","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"0i4kL0zKVUXzM4FGesbGCQhpM1AxjiS_","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/619fd805-e6e1-4e29-91b8-adb186931928.png"},"91b16b83-ee05-43a2-b706-1195707ffa0b":{"name":"hero_sliding_left","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"YuYdKtd8Mw0n8rfoOeRcvb0AEzuRuyou","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/91b16b83-ee05-43a2-b706-1195707ffa0b.png"},"5c7ea446-1c27-432e-909d-bf6470d0e79e":{"name":"hero_dead_leaf","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"Y7s6iXjcJqAD0cz8A6L_YLG6KeQYusr6","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/5c7ea446-1c27-432e-909d-bf6470d0e79e.png"},"13589c8e-c4d0-4b38-888c-fa5eb98487b2":{"name":"hero_dead_fire","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"ddbQkrzOOARH9Qr.ybYuJPDq0kZ8MNZX","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/13589c8e-c4d0-4b38-888c-fa5eb98487b2.png"},"f43d08fe-e0b0-4475-a40d-aa3662d9ca20":{"name":"floor_1","sourceUrl":null,"frameSize":{"x":60,"y":10},"frameCount":1,"looping":true,"frameDelay":12,"version":"KJZXzIrnFwb7KG.t0hm9lu_zpmS6ooSl","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":10},"rootRelativePath":"assets/f43d08fe-e0b0-4475-a40d-aa3662d9ca20.png"},"1c5dac7d-539d-4b1c-8019-796050928158":{"name":"floor_1_platform","sourceUrl":null,"frameSize":{"x":60,"y":10},"frameCount":1,"looping":true,"frameDelay":12,"version":"nLQjLyLNv0g6LWmeDsbyUhl5BQVgwrr7","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":10},"rootRelativePath":"assets/1c5dac7d-539d-4b1c-8019-796050928158.png"},"d24ef241-4f1e-459f-bff9-e60b0d217758":{"name":"floor_1_stone","sourceUrl":null,"frameSize":{"x":60,"y":10},"frameCount":1,"looping":true,"frameDelay":12,"version":"gdiFf6FGd.esSG.f_RmJFKoigslnIfS4","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":10},"rootRelativePath":"assets/d24ef241-4f1e-459f-bff9-e60b0d217758.png"},"2d032e9d-3d29-4dd8-94b9-eabc2e3a872a":{"name":"floor_1_mushroom","sourceUrl":null,"frameSize":{"x":60,"y":10},"frameCount":1,"looping":true,"frameDelay":12,"version":"FGzoZMRMwFx6Pr5TeBCsWOfZlBkG.fo4","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":10},"rootRelativePath":"assets/2d032e9d-3d29-4dd8-94b9-eabc2e3a872a.png"},"f0bd0af1-d757-4042-830a-31b950a62e49":{"name":"floor_1_ice","sourceUrl":null,"frameSize":{"x":60,"y":14},"frameCount":1,"looping":true,"frameDelay":12,"version":"ugAnBYUS3o5aYq.uN7DcKONe_YI4v3Yd","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":14},"rootRelativePath":"assets/f0bd0af1-d757-4042-830a-31b950a62e49.png"},"7efa63d0-9022-4183-b402-9f752230af4c":{"name":"floor_1_sand","sourceUrl":null,"frameSize":{"x":60,"y":14},"frameCount":1,"looping":true,"frameDelay":12,"version":"oJ5Ub7.V2wDUdabf5xXqte.GBszbMDvZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":14},"rootRelativePath":"assets/7efa63d0-9022-4183-b402-9f752230af4c.png"},"eb57c90d-c27f-4edb-9992-7b29100bbbf8":{"name":"floor_1_lava","sourceUrl":null,"frameSize":{"x":60,"y":14},"frameCount":1,"looping":true,"frameDelay":12,"version":"JiiY.GihUpfFKGEAbJPEVglv5bNQoGq_","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":14},"rootRelativePath":"assets/eb57c90d-c27f-4edb-9992-7b29100bbbf8.png"},"93a10351-954c-49b5-8e1c-5c7927d28d69":{"name":"rotating_platform_1","sourceUrl":null,"frameSize":{"x":150,"y":10},"frameCount":1,"looping":true,"frameDelay":12,"version":"4OLczixRZYX_8.CKgjn2vQH3_qdU93Tk","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":10},"rootRelativePath":"assets/93a10351-954c-49b5-8e1c-5c7927d28d69.png"},"e7220af9-76e2-4600-8964-118595b97faf":{"name":"rotating_platform_2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"lo0zSbkcGaUWrk1B57h0iuRV_EbsSly.","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/e7220af9-76e2-4600-8964-118595b97faf.png"},"4ae5a4ca-a5d6-43b3-8ef7-3a3ed7ee4d2a":{"name":"wheel_1","sourceUrl":null,"frameSize":{"x":125,"y":125},"frameCount":8,"looping":true,"frameDelay":1,"version":"UJDY6lir78kWcOsvnHQk1ZwF737hDqq5","loadedFromSource":true,"saved":true,"sourceSize":{"x":375,"y":375},"rootRelativePath":"assets/4ae5a4ca-a5d6-43b3-8ef7-3a3ed7ee4d2a.png"},"989715f0-d401-4722-ba98-7df364919812":{"name":"wheel_2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":".ZLtX8ifKN6JwnBGfjJ6A.DKcDQkPmgo","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/989715f0-d401-4722-ba98-7df364919812.png"},"61da88ad-3019-4def-b882-6c5e653319f1":{"name":"ground_1","sourceUrl":null,"frameSize":{"x":60,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"mRHlJBtoGIGtkpUNZym3kOxNmk6J2l9Y","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":200},"rootRelativePath":"assets/61da88ad-3019-4def-b882-6c5e653319f1.png"},"8c1e5ba0-ff2f-4ed9-8e76-1fd568b7fa38":{"name":"ground_1_stone","sourceUrl":null,"frameSize":{"x":60,"y":198},"frameCount":1,"looping":true,"frameDelay":12,"version":"WmbA29JteMvkHoWb6KcR_j1uUkId9rPC","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":198},"rootRelativePath":"assets/8c1e5ba0-ff2f-4ed9-8e76-1fd568b7fa38.png"},"07e5b9f5-36e9-425d-be87-7f9486ea16c5":{"name":"ground_1_mushroom","sourceUrl":null,"frameSize":{"x":24,"y":198},"frameCount":1,"looping":true,"frameDelay":12,"version":"CIhtYoGpyx4BH_fK0Dp.3pDz08jkmZLQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":24,"y":198},"rootRelativePath":"assets/07e5b9f5-36e9-425d-be87-7f9486ea16c5.png"},"78430074-7053-4303-b8dc-d0e0cea7346c":{"name":"ground_1_ice","sourceUrl":null,"frameSize":{"x":60,"y":198},"frameCount":1,"looping":true,"frameDelay":12,"version":"iR83SvPdjuDjh6Zj5BQw0mMVEwybLoqq","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":198},"rootRelativePath":"assets/78430074-7053-4303-b8dc-d0e0cea7346c.png"},"be709c1f-dff5-4b5a-95df-fca65e4e7ac9":{"name":"ground_1_lava","sourceUrl":null,"frameSize":{"x":61,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"Dg0ebf3gJQasMrlEE9oxcVac5Pbdyhap","loadedFromSource":true,"saved":true,"sourceSize":{"x":61,"y":200},"rootRelativePath":"assets/be709c1f-dff5-4b5a-95df-fca65e4e7ac9.png"},"1e7bd7ef-b304-4a84-bd07-2c5a0b561750":{"name":"ground_1_sand","sourceUrl":null,"frameSize":{"x":61,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"O.b3J4D5YKtqmzOm_8Jbu7ZpI137uvRb","loadedFromSource":true,"saved":true,"sourceSize":{"x":61,"y":200},"rootRelativePath":"assets/1e7bd7ef-b304-4a84-bd07-2c5a0b561750.png"},"7bb87cf7-4eb3-4541-96cb-98bcde656801":{"name":"lava_1","sourceUrl":null,"frameSize":{"x":400,"y":200},"frameCount":6,"looping":true,"frameDelay":2,"version":"jNIwpM9cOLSbwuT9LRKx4SlNpu.eK0EP","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":600},"rootRelativePath":"assets/7bb87cf7-4eb3-4541-96cb-98bcde656801.png"},"52ee99d3-b70c-47a4-a4e4-88f3592ead60":{"name":"block_?_1","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":7,"looping":true,"frameDelay":4,"version":"QYjolkQ3prP4Qq3ytcXpBuF7xfGgqTJj","loadedFromSource":true,"saved":true,"sourceSize":{"x":90,"y":90},"rootRelativePath":"assets/52ee99d3-b70c-47a4-a4e4-88f3592ead60.png"},"c2fbf7d8-0479-430a-938c-fb06144e67b4":{"name":"block_?_tutorial","sourceUrl":null,"frameSize":{"x":300,"y":250},"frameCount":1,"looping":true,"frameDelay":12,"version":"lVef.P3eV_XROU.nXyqL.jNjGc0SUt4A","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":250},"rootRelativePath":"assets/c2fbf7d8-0479-430a-938c-fb06144e67b4.png"},"ad3aabba-aa40-4c76-8bc6-c51d3ac89f60":{"name":"block_?_1_platform","sourceUrl":null,"frameSize":{"x":30,"y":1},"frameCount":1,"looping":true,"frameDelay":12,"version":"yj6lPr9EBN9j28SjOtqbzo7fHzoUbc0T","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":1},"rootRelativePath":"assets/ad3aabba-aa40-4c76-8bc6-c51d3ac89f60.png"},"793aab1c-9455-478b-8cb7-cbbdd2c0968c":{"name":"block_?_2","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"82SIcm6El35VMjwssB1DCA67aq7Y6Gm9","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/793aab1c-9455-478b-8cb7-cbbdd2c0968c.png"},"eb510e39-08eb-4145-a75a-dc25b625e492":{"name":"spring_1","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"pKLKLd.2r93e0QhZO1OT9ZzNhwlhfqmI","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/eb510e39-08eb-4145-a75a-dc25b625e492.png"},"7e6a672f-a659-4c74-ab63-dfc5f7ae8556":{"name":"spring_2","sourceUrl":null,"frameSize":{"x":30,"y":90},"frameCount":1,"looping":true,"frameDelay":12,"version":"YVnbno4WD_Cg8Cm76AavCRSkSeDJMlSw","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":90},"rootRelativePath":"assets/7e6a672f-a659-4c74-ab63-dfc5f7ae8556.png"},"602df06a-16fd-4fa5-9403-d16802a23c81":{"name":"fire_power","sourceUrl":null,"frameSize":{"x":25,"y":25},"frameCount":2,"looping":true,"frameDelay":4,"version":"L11qhRYRleRKOpQzwuVou0ORsen.ZX31","loadedFromSource":true,"saved":true,"sourceSize":{"x":25,"y":50},"rootRelativePath":"assets/602df06a-16fd-4fa5-9403-d16802a23c81.png"},"503b07c1-5d77-4f41-b752-1ea50495cc3e":{"name":"fire_power_tutorial","sourceUrl":null,"frameSize":{"x":260,"y":150},"frameCount":1,"looping":true,"frameDelay":12,"version":"oECqhPoiQh33310L7dzokzfLzbykiksu","loadedFromSource":true,"saved":true,"sourceSize":{"x":260,"y":150},"rootRelativePath":"assets/503b07c1-5d77-4f41-b752-1ea50495cc3e.png"},"2b896f2e-d7b8-4198-aecd-c5f98b6fca1d":{"name":"ice_power_tutorial","sourceUrl":null,"frameSize":{"x":260,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"SeFApyKplUU3QofZpiiYR6bIgt40BD8z","loadedFromSource":true,"saved":true,"sourceSize":{"x":260,"y":50},"rootRelativePath":"assets/2b896f2e-d7b8-4198-aecd-c5f98b6fca1d.png"},"226ce7b8-e8fe-4c7b-99c3-29f2f549f29a":{"name":"cold_power","sourceUrl":null,"frameSize":{"x":25,"y":25},"frameCount":2,"looping":true,"frameDelay":12,"version":"Btrkh1_927n5KT44BGL_BCAuv_S6au6x","loadedFromSource":true,"saved":true,"sourceSize":{"x":25,"y":50},"rootRelativePath":"assets/226ce7b8-e8fe-4c7b-99c3-29f2f549f29a.png"},"ed98f807-c0ee-4310-be14-5fed32dba8a0":{"name":"leaf_power","sourceUrl":null,"frameSize":{"x":25,"y":25},"frameCount":2,"looping":true,"frameDelay":3,"version":"gD_37wt02vACVZ91zazn3lKsVOxbzPb0","loadedFromSource":true,"saved":true,"sourceSize":{"x":25,"y":50},"rootRelativePath":"assets/ed98f807-c0ee-4310-be14-5fed32dba8a0.png"},"574d5b37-ebff-465e-83a3-21f617d125bc":{"name":"leaf_power_tutorial","sourceUrl":null,"frameSize":{"x":340,"y":40},"frameCount":1,"looping":true,"frameDelay":12,"version":"qpsUHnyvL.qt3s.LudVAFg1gtdQoZQW_","loadedFromSource":true,"saved":true,"sourceSize":{"x":340,"y":40},"rootRelativePath":"assets/574d5b37-ebff-465e-83a3-21f617d125bc.png"},"4d8c00bf-e14a-4631-9d9b-a572bb4174f2":{"name":"coin_1","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":6,"looping":true,"frameDelay":2,"version":"XfOw.T1XRNJrSGmOoTRqkCKFfYMNXGD2","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":90},"rootRelativePath":"assets/4d8c00bf-e14a-4631-9d9b-a572bb4174f2.png"},"d3057b99-dccb-480a-ac79-b15479c203d8":{"name":"enemy_walking_1","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":2,"looping":true,"frameDelay":12,"version":"lwnay0pUSdiw1D5BAlmBx7yMG_EdkQoA","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":60},"rootRelativePath":"assets/d3057b99-dccb-480a-ac79-b15479c203d8.png"},"12af157c-2015-48f8-98ba-0aebe312f970":{"name":"enemy_tutorial_1","sourceUrl":null,"frameSize":{"x":195,"y":150},"frameCount":1,"looping":true,"frameDelay":12,"version":"J0b2YvEexkTCQR7p2Hvx.oyTmDVCmzLj","loadedFromSource":true,"saved":true,"sourceSize":{"x":195,"y":150},"rootRelativePath":"assets/12af157c-2015-48f8-98ba-0aebe312f970.png"},"a9deeb4b-e666-46bb-80ff-8b8de3dacbfd":{"name":"enemy_frozen_1","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"xgehXgV0JDGQweJGmoMh_XvTGqL.2YJt","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/a9deeb4b-e666-46bb-80ff-8b8de3dacbfd.png"},"55303fd1-a1b4-4dbc-95a3-3cf1f8709447":{"name":"enemy_wings_1","sourceUrl":null,"frameSize":{"x":60,"y":30},"frameCount":4,"looping":true,"frameDelay":4,"version":"BO09Xp.WDcc1PY3XQyNnwHrtf0oSTk_8","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":120},"rootRelativePath":"assets/55303fd1-a1b4-4dbc-95a3-3cf1f8709447.png"},"7d22396e-44c2-410f-92e8-68fe32d005e5":{"name":"enemy_gang_1","sourceUrl":null,"frameSize":{"x":78,"y":60},"frameCount":2,"looping":true,"frameDelay":4,"version":"PUB8QYMtgxxVbniNII.Rm8MIfhA0IxD8","loadedFromSource":true,"saved":true,"sourceSize":{"x":78,"y":120},"rootRelativePath":"assets/7d22396e-44c2-410f-92e8-68fe32d005e5.png"},"a3d663ee-401e-4951-a182-adfe3b5cd70c":{"name":"enemy_gang_2","sourceUrl":null,"frameSize":{"x":78,"y":60},"frameCount":2,"looping":true,"frameDelay":4,"version":"RKZsRSUGdEl68EgxZUeOUULNBfaj_VBy","loadedFromSource":true,"saved":true,"sourceSize":{"x":78,"y":120},"rootRelativePath":"assets/a3d663ee-401e-4951-a182-adfe3b5cd70c.png"},"07b5d56c-65a2-4619-a8bf-65906ab68f39":{"name":"enemy_dead_1","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":2,"looping":false,"frameDelay":12,"version":"0AgMJN4RM_eFgRULpry6zeGePeJJBzCO","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":60},"rootRelativePath":"assets/07b5d56c-65a2-4619-a8bf-65906ab68f39.png"},"2b307836-67dc-434e-8bbd-5fef88c3d8be":{"name":"boss_1","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":2,"looping":true,"frameDelay":12,"version":"y1u_BZlGojNshBJUm0ABc6Bp5WqSrbtm","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":120},"rootRelativePath":"assets/2b307836-67dc-434e-8bbd-5fef88c3d8be.png"},"f3a67942-ac5c-428e-b22d-96051be38957":{"name":"king_1","sourceUrl":null,"frameSize":{"x":90,"y":90},"frameCount":2,"looping":true,"frameDelay":12,"version":"0q0rdHHTZfolOBu7tys2deF0Hb4GFn0P","loadedFromSource":true,"saved":true,"sourceSize":{"x":90,"y":180},"rootRelativePath":"assets/f3a67942-ac5c-428e-b22d-96051be38957.png"},"74c7affa-3293-450b-af0f-f42b729981ff":{"name":"king_1_huge","sourceUrl":null,"frameSize":{"x":350,"y":350},"frameCount":2,"looping":true,"frameDelay":12,"version":"TgHbv.brZEw8ScCKHsNIryYszmB_sSTW","loadedFromSource":true,"saved":true,"sourceSize":{"x":350,"y":700},"rootRelativePath":"assets/74c7affa-3293-450b-af0f-f42b729981ff.png"},"2a06c9aa-9013-41dd-9cec-24f79e9c44c8":{"name":"king_1_huge_hurt","sourceUrl":null,"frameSize":{"x":350,"y":300},"frameCount":1,"looping":true,"frameDelay":12,"version":"RMvbLan4UugB.jv7ic6ePPDtF.Zbzx7N","loadedFromSource":true,"saved":true,"sourceSize":{"x":350,"y":300},"rootRelativePath":"assets/2a06c9aa-9013-41dd-9cec-24f79e9c44c8.png"},"956e8b4b-48b7-4672-9f8f-ffa5ed9e408b":{"name":"anvil_1","sourceUrl":null,"frameSize":{"x":300,"y":222},"frameCount":1,"looping":true,"frameDelay":12,"version":"11xUp1zX.XhSlwt1q0T_WG2zAb4Jqbyz","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":222},"rootRelativePath":"assets/956e8b4b-48b7-4672-9f8f-ffa5ed9e408b.png"},"a3bf955f-1d70-4d5c-a730-b6b9a5d04f89":{"name":"king_2","sourceUrl":null,"frameSize":{"x":90,"y":90},"frameCount":1,"looping":true,"frameDelay":12,"version":"_z43sicNHWH2pRHGckmjZ1KyDRtAqGuV","loadedFromSource":true,"saved":true,"sourceSize":{"x":90,"y":90},"rootRelativePath":"assets/a3bf955f-1d70-4d5c-a730-b6b9a5d04f89.png"},"fc0f6888-c44e-45bf-a5b8-e2c6814c7604":{"name":"king_2_power","sourceUrl":null,"frameSize":{"x":90,"y":90},"frameCount":2,"looping":true,"frameDelay":1,"version":"DHHkfbLOjKk2T8_xNS33OutkMKGtQdk1","loadedFromSource":true,"saved":true,"sourceSize":{"x":90,"y":180},"rootRelativePath":"assets/fc0f6888-c44e-45bf-a5b8-e2c6814c7604.png"},"b4b17e7f-808f-4be4-8675-7a09251b6e85":{"name":"king_1_hurt","sourceUrl":null,"frameSize":{"x":90,"y":90},"frameCount":1,"looping":true,"frameDelay":12,"version":"ReL9Mdtax_YzKWsaUpIMlY_hAiZ95BzM","loadedFromSource":true,"saved":true,"sourceSize":{"x":90,"y":90},"rootRelativePath":"assets/b4b17e7f-808f-4be4-8675-7a09251b6e85.png"},"8acdee00-26a0-4bec-a675-264eef1ac6ac":{"name":"boss_2","sourceUrl":null,"frameSize":{"x":180,"y":60},"frameCount":3,"looping":true,"frameDelay":3,"version":"60LBIODJm7jjbsDiTouyKx2G.qw_DSWP","loadedFromSource":true,"saved":true,"sourceSize":{"x":180,"y":180},"rootRelativePath":"assets/8acdee00-26a0-4bec-a675-264eef1ac6ac.png"},"26c8ed76-84f4-48f2-97a0-c361eb0aaeb7":{"name":"boss_1_dead","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"MusyYb4UKhhqDJ012hi4MF6EweEcyNYF","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":60},"rootRelativePath":"assets/26c8ed76-84f4-48f2-97a0-c361eb0aaeb7.png"},"104088b6-5e70-416e-8d2e-8e9ddd3d2d17":{"name":"boss_1_hurt","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"zH5qqnM.3e1rNkDZpKm8Ou8BHJVBZmUF","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":60},"rootRelativePath":"assets/104088b6-5e70-416e-8d2e-8e9ddd3d2d17.png"},"a4515d18-13a1-4bc2-981c-facf1b8577bd":{"name":"fireball_1","sourceUrl":null,"frameSize":{"x":25,"y":25},"frameCount":4,"looping":true,"frameDelay":3,"version":"sesx8H_pgDzwfGnlhsE0E5RMaGSD3OTm","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":50},"rootRelativePath":"assets/a4515d18-13a1-4bc2-981c-facf1b8577bd.png"},"c319c8be-e943-4701-913c-da74760c17d8":{"name":"iceball_1","sourceUrl":null,"frameSize":{"x":25,"y":25},"frameCount":4,"looping":true,"frameDelay":3,"version":"uqLhwd_UoJNzn3FTzBGrDdu2UayUvB6d","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":50},"rootRelativePath":"assets/c319c8be-e943-4701-913c-da74760c17d8.png"},"ca19dbc6-2e4c-4c33-a292-19ff48ba251e":{"name":"tower_1","sourceUrl":null,"frameSize":{"x":120,"y":300},"frameCount":1,"looping":true,"frameDelay":12,"version":"gieMgbN_fB_HGYTYrnIBGBOG.Wjuxcxy","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":300},"rootRelativePath":"assets/ca19dbc6-2e4c-4c33-a292-19ff48ba251e.png"},"b21c56f5-28f5-494a-9b4d-8e8ce70046cc":{"name":"castle_1","sourceUrl":null,"frameSize":{"x":360,"y":300},"frameCount":1,"looping":true,"frameDelay":12,"version":"GfDKEV27xE4Cx.Q.UtB.sUHL7kprtVhH","loadedFromSource":true,"saved":true,"sourceSize":{"x":360,"y":300},"rootRelativePath":"assets/b21c56f5-28f5-494a-9b4d-8e8ce70046cc.png"},"f408c4c9-8930-4958-8721-c4a43b720c91":{"name":"arrow_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"hFHNvJ_4q05qN6JHL68DlflQnuFL0V.v","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/f408c4c9-8930-4958-8721-c4a43b720c91.png"},"3a6d47b0-087a-471f-b87b-a0e5b75d135d":{"name":"arrow_2","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":2,"looping":true,"frameDelay":4,"version":"wqEjvKRxka4428t1M_Ao6W9T6cX6dqjc","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":120},"rootRelativePath":"assets/3a6d47b0-087a-471f-b87b-a0e5b75d135d.png"},"62b4be4d-2b62-40a0-81b1-3a323e763f4a":{"name":"switch_1","sourceUrl":null,"frameSize":{"x":40,"y":40},"frameCount":4,"looping":true,"frameDelay":5,"version":"ezd.umX9JwZqMel9Y_kYUh4aJmNN.lFz","loadedFromSource":true,"saved":true,"sourceSize":{"x":80,"y":80},"rootRelativePath":"assets/62b4be4d-2b62-40a0-81b1-3a323e763f4a.png"},"ac5388f2-6c5f-4b27-b845-f308d1902783":{"name":"switch_1_pressed","sourceUrl":null,"frameSize":{"x":40,"y":40},"frameCount":1,"looping":true,"frameDelay":12,"version":"00XmKveLPsoo5yd8BecPByLYEsufqgIJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":40},"rootRelativePath":"assets/ac5388f2-6c5f-4b27-b845-f308d1902783.png"},"d0a035b3-00ce-44a7-b961-eb8eb9c24826":{"name":"screen_black_1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":15,"looping":false,"frameDelay":2,"version":"ssf2lyALZlY0NXt3VE40ZxTRZp.me8DC","loadedFromSource":true,"saved":true,"sourceSize":{"x":1600,"y":1600},"rootRelativePath":"assets/d0a035b3-00ce-44a7-b961-eb8eb9c24826.png"},"3ab0d289-a73a-4cb1-8f47-c95a6fb4cc87":{"name":"buffer","sourceUrl":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png","frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png"},"640d4410-9884-4ac5-bc1c-df65c99de7dd":{"name":"tutorial_1","sourceUrl":null,"frameSize":{"x":231,"y":150},"frameCount":1,"looping":true,"frameDelay":12,"version":"lrvg.3QIZovAm56RqknUDdDbN3iS3ZLE","loadedFromSource":true,"saved":true,"sourceSize":{"x":231,"y":150},"rootRelativePath":"assets/640d4410-9884-4ac5-bc1c-df65c99de7dd.png"},"80bd57f4-8eca-437a-b11c-eec8313e0cd5":{"name":"tutorial_2","sourceUrl":null,"frameSize":{"x":350,"y":70},"frameCount":1,"looping":true,"frameDelay":12,"version":"raXWsGW8.lFutZH.pMAaR15y7ZP6cCpo","loadedFromSource":true,"saved":true,"sourceSize":{"x":350,"y":70},"rootRelativePath":"assets/80bd57f4-8eca-437a-b11c-eec8313e0cd5.png"},"709520a4-6369-4290-b437-1c18e9632b28":{"name":"tutorial_3","sourceUrl":null,"frameSize":{"x":180,"y":120},"frameCount":1,"looping":true,"frameDelay":12,"version":"S4NAcn24LzJOj_HyVUAoyFUy2FGX.e44","loadedFromSource":true,"saved":true,"sourceSize":{"x":180,"y":120},"rootRelativePath":"assets/709520a4-6369-4290-b437-1c18e9632b28.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----










//to play other games and request features for this game, 
//visit this app lab; 





























var music = true;

//hero variables
var skips = 0;
var credits = 0;
var dirrection = "right";
var can_jump = true;
var double_jump_timer = 0;
var stop_jump = true;
var touching_ground = true;
var hero_control = false;
var hero_platforms = true;
var power = "none";
var jump_sound_timer = 0;
//world
var lava_create = 0;
var switch_used = false;
var world = 1;
var phase = 1;
var skiploop = 0;
var theme = "overworld";
var panel = 0;
var coins = 0;
var total_coins = 0;
var coin_display = 0;
var block_1_used = false;
var lava_rise = 0;
var item_power = "leaf";
var cut_1 = 0;
var cut_2 = 0;
//boss fight 1
var boss_fight_1 = false;
var boss_dammaged_timer = 60;
var boss_health = 3;
//floor and ground
var tutorial = createSprite(200, 150);
tutorial.setAnimation("tutorial_1");
var floor_1 = createSprite(30,200);
floor_1.setAnimation("floor_1");
var ground_1 = createSprite(-200, -200);
ground_1.setAnimation("ground_1");
var floor_2 = createSprite(90, 200);
floor_2.setAnimation("floor_1");
var ground_2 = createSprite(-200, -200);
ground_2.setAnimation("ground_1");
var floor_3 = createSprite(150, 200);
floor_3.setAnimation("floor_1");
var ground_3 = createSprite(-200, -200);
ground_3.setAnimation("ground_1");
var floor_4 = createSprite(210, 300);
floor_4.setAnimation("floor_1");
var ground_4 = createSprite(-200, -200);
ground_4.setAnimation("ground_1");
var floor_5 = createSprite(270, 200);
floor_5.setAnimation("floor_1");
var ground_5 = createSprite(-200, -200);
ground_5.setAnimation("ground_1");
var floor_6 = createSprite(330, 200);
floor_6.setAnimation("floor_1");
var ground_6 = createSprite(-200, -200);
ground_6.setAnimation("ground_1");
var floor_7 = createSprite(390, 200);
floor_7.setAnimation("floor_1");
var ground_7 = createSprite(-200, -200);
ground_7.setAnimation("ground_1");

var platform_1 = createSprite(200, 200);
platform_1.setAnimation("floor_1_platform");
var platform_2 = createSprite(90, 250);
platform_2.setAnimation("floor_1_platform");
var platform_3 = createSprite(150, 250);
platform_3.setAnimation("floor_1_platform");
var platform_4 = createSprite(210, 250);
platform_4.setAnimation("floor_1_platform");
var platform_5 = createSprite(270, 250);
platform_5.setAnimation("floor_1_platform");
var platform_6 = createSprite(330, 250);
platform_6.setAnimation("floor_1_platform");
var platform_7 = createSprite(390, 250);
platform_7.setAnimation("floor_1_platform");
var spring_1 = createSprite(200, 280);
spring_1.setAnimation("spring_1");
var block_platform_1 = createSprite(200, 280);
block_platform_1.setAnimation("block_?_1_platform");
var rotating_platform_1 = createSprite(200, 200);
rotating_platform_1.setAnimation("rotating_platform_1");
rotating_platform_1.rotationSpeed = 2;
var rotating_platform_2 = createSprite(-200, -200);
rotating_platform_2.setAnimation("rotating_platform_2");
rotating_platform_2.rotationSpeed = -3;
var rotating_platform_3 = createSprite(-200, -200);
rotating_platform_3.setAnimation("rotating_platform_2");
rotating_platform_3.rotationSpeed = -3;

var wheel_1 = createSprite(-200, -200);
wheel_1.setAnimation("wheel_1");
var wheel_2 = createSprite(-200, -200);
wheel_2.setAnimation("wheel_1");
wheel_1.setCollider("circle");
wheel_2.setCollider("circle");


//coins
var coin_1 = createSprite(200, 280);
coin_1.setAnimation("coin_1");
var coin_2 = createSprite(200, 280);
coin_2.setAnimation("coin_1");
var coin_3 = createSprite(200, 280);
coin_3.setAnimation("coin_1");
//deceration
var tower_1 = createSprite(350, 150);
tower_1.setAnimation("tower_1");
var castle_1 = createSprite(-350, -150);
castle_1.setAnimation("castle_1");
var arrow_1 = createSprite(350, 150);
arrow_1.setAnimation("arrow_1");
//enemies
var enemy_1 = createSprite(300, 100);
enemy_1.setAnimation("enemy_walking_1");
var enemy_2 = createSprite(300, 100);
enemy_2.setAnimation("enemy_walking_1");
var enemy_dead_1 = createSprite(300, 100);
enemy_dead_1.setAnimation("buffer");
var boss_1 = createSprite(300, 275);
boss_1.setAnimation("boss_1");
var king_1 = createSprite(-300, -275);
king_1.setAnimation("king_2");
var anvil_1 = createSprite(230, -120);
anvil_1.setAnimation("anvil_1");
var switch_1 = createSprite(-400, -400);
switch_1.setAnimation("switch_1");
var lava_1 = createSprite(200, 500);
lava_1.setAnimation("lava_1");
//power_ups
var block_1 = createSprite(200, 200);
block_1.setAnimation("block_?_1");
var fire_power = createSprite(-1000, 170);
fire_power.setAnimation("fire_power");
var fireball_1 = createSprite(-200, -200);
fireball_1.setAnimation("fireball_1");
var iceball_1 = createSprite(-200, -200);
iceball_1.setAnimation("iceball_1");
//hero
var king_1_huge = createSprite(-500, 250);
king_1_huge.setAnimation("king_1_huge");


var hero = createSprite(100, 280);
hero.setAnimation("hero_idle_right");
var fluff = createSprite(200, 280);
fluff.setAnimation("fluff_1");
var enemy_gang = createSprite(500, 265);
enemy_gang.setAnimation("enemy_gang_1");


var black_1 = createSprite(200, 200);
black_1.setAnimation("buffer");



function stopsound() {
  stopSound("assets/cold_loop_1.mp3");
  stopSound("assets/mushroom_loop_1.mp3");
  stopSound("assets/overworld_loop_1.mp3");
  stopSound("assets/lava_loop_1.mp3");
  stopSound("assets/boss_loop_1.mp3");
}
floor_create(300, 300, 300, 300, 250, 200, 300);
function game_over() {
  if (power == "fire") {
    hero.setAnimation("hero_dead_fire");
  } else {
    hero.setAnimation("hero_dead");
  }
  hero_control = false;
  hero_platforms = false;
  hero.velocityX = 0;
  hero.velocityY = -10;
}
function floor_create(A, B, C, D, E, F, G) {
  floor_1.x = 30;
  floor_1.y = A;
  floor_2.x = 90;
  floor_2.y = B;
  floor_3.x = 150;
  floor_3.y = C;
  floor_4.x = 210;
  floor_4.y = D;
  floor_5.x = 270;
  floor_5.y = E;
  floor_6.x = 330;
  floor_6.y = F;
  floor_7.x = 390;
  floor_7.y = G;
}
function platforms_create(A1, B1, C1, D1, E1, F1, G1) {
  platform_1.x = 30;
  platform_1.y = A1;
  platform_2.x = 90;
  platform_2.y = B1;
  platform_3.x = 150;
  platform_3.y = C1;
  platform_4.x = 210;
  platform_4.y = D1;
  platform_5.x = 270;
  platform_5.y = E1;
  platform_6.x = 330;
  platform_6.y = F1;
  platform_7.x = 390;
  platform_7.y = G1;
}
function reset_all() {
  fire_power.x = -1000;
  enemy_1.x = -1000;
  block_1.x = -1000;
  block_1_used = false;
  block_1.setAnimation("block_?_1");
  tutorial.setAnimation("buffer");
  block_1_used = false;
  fire_power.x = -200;
  fire_power.y = -200;
  enemy_1.x = -200;
  enemy_1.y = -200;
  enemy_2.x = -200;
  enemy_2.y = -200;
  block_1.x = -200;
  block_1.y = -200;
  spring_1.x = -200;
  spring_1.y = -200;
  enemy_1.velocityY = 0;
  enemy_2.velocityY = 0;
  enemy_1.velocityX = -1.5;
  enemy_2.velocityX = -1.5;
  coin_1.x = -200;
  coin_1.y = -200;
  coin_2.x = -200;
  coin_2.y = -200;
  coin_3.x = -200;
  coin_3.y = -200;
  tower_1.x = -200;
  tower_1.y = -200;
  castle_1.x = -200;
  castle_1.y = -200;
  arrow_1.x = -200;
  arrow_1.y = -200;
  boss_1.x = -200;
  boss_1.y = -200;
  rotating_platform_1.x = -200;
  rotating_platform_1.y = -200;
}
create_panel();
function create_panel() {
  reset_all();
  if (panel == 0) {
    //ground
    floor_create(300, 300, 300, 300, 300, 300, 300);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    //blocks
    enemy_1.x = -200;
    enemy_1.y = -200;
    block_1.x = -200;
    block_1.y = -200;
    spring_1.x = -200;
    spring_1.y = -200;
    item_power = "fire";
    tutorial.setAnimation("buffer");
  }
  if (panel == 1) {
    stopsound();
    if (music == true) {
      playSound("assets/overworld_loop_1.mp3", true);
    }
    hero_control = true;
    cut_1 = 2;
    enemy_gang.x = -200;
    enemy_gang.y = -200;
    fluff.x = -200;
    fluff.y = -200;
    //ground
    floor_create(300, 300, 300, 275, 250, 275, 250);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //coins
    coin_1.x = 100;
    coin_1.y = 275;
    coin_2.x = 200;
    coin_2.y = 250;
    coin_3.x = 250;
    coin_3.y = 225;
    //blocks
    enemy_1.x = -200;
    enemy_1.y = -200;
    block_1.x = -200;
    block_1.y = -200;
    spring_1.x = -200;
    spring_1.y = -200;
    item_power = "fire";
    tutorial.setAnimation("tutorial_1");
  }
  if (panel == 2) {
    hero.y = 175;
    //ground
    floor_create(200, 200, 800, 800, 300, 300, 300);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    //blocks
    enemy_1.x = -200;
    enemy_1.y = -200;
    block_1.x = -200;
    block_1.y = -200;
    spring_1.x = -200;
    spring_1.y = -200;
    item_power = "fire";
    tutorial.setAnimation("tutorial_2");
  }
  if (panel == 3) {
    //ground
    floor_create(300, 275, 250, 250, 250, 225, 200);
    platforms_create(-200, -200, -200, 200, -200, -175, -200);
    //enemys
    //coins
    coin_1.x = 150;
    coin_1.y = 225;
    coin_2.x = 200;
    coin_2.y = 225;
    //blocks
    enemy_1.x = -375;
    enemy_1.y = -175;
    block_1.x = 275;
    block_1.y = 150;
    spring_1.x = -200;
    spring_1.y = -200;
    item_power = "fire";
    tutorial.setAnimation("block_?_tutorial");
  }
  if (panel == 4) {
    //ground
    floor_create(250, 250, 250, 250, 250, 250, 250);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    //blocks
    hero.y = 225;
    enemy_1.x = 375;
    enemy_1.y = 200;
    enemy_2.x = 325;
    enemy_2.y = 200;
    block_1.x = -200;
    block_1.y = -200;
    spring_1.x = -200;
    spring_1.y = -200;
    item_power = "fire";
    tutorial.setAnimation("fire_power_tutorial");
  }
  if (panel == 5) {
    //ground
    floor_create(300, 300, 300, 300, 200, 200, 200);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    //coins
    coin_1.x = 200;
    coin_1.y = 250;
    coin_2.x = 200;
    coin_2.y = 200;
    coin_3.x = 200;
    coin_3.y = 150;
    //blocks
    enemy_1.x = -200;
    enemy_1.y = -200;
    enemy_2.x = -200;
    enemy_2.y = -200;
    block_1.x = -200;
    block_1.y = -200;
    spring_1.x = 200;
    spring_1.y = 280;
    item_power = "fire";
    tutorial.setAnimation("buffer");
  }
  if (panel == 6) {
    //ground
             floor_create(200, 350, 350, 350, 1000, 200, 200);
    platforms_create(-200, -200, -200, -200, 275, -200, -200);
    //enemys
    //coins
    coin_1.x = 275;
    coin_1.y = 300;
    
    //blocks
    enemy_1.x = -200;
    enemy_1.y = -200;
    enemy_2.x = -200;
    enemy_2.y = -200;
    block_1.x = 200;
    block_1.y = 275;
    spring_1.x = -200;
    spring_1.y = -200;
    item_power = "fire";
    tutorial.setAnimation("tutorial_3");
  }
  if (panel == 7) {
    //ground
             floor_create(200, 800, 200, 800, 200, 800, 200);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    //blocks
    enemy_1.x = -200;
    enemy_1.y = -200;
    enemy_2.x = -200;
    enemy_2.y = -200;
    block_1.x = -200;
    block_1.y = -200;
    spring_1.x = -200;
    spring_1.y = -200;
    item_power = "fire";
    tutorial.setAnimation("buffer");
  }
  if (panel == 8) {
    //ground
             floor_create(300, 300, 250, 200, 800, 200, 200);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    //coins
    coin_1.x = 250;
    coin_1.y = 175;
    coin_2.x = 275;
    coin_2.y = 150;
    coin_3.x = 300;
    coin_3.y = 175;
    //blocks
    enemy_1.x = 210;
    enemy_1.y = 175;
    enemy_2.x = -200;
    enemy_2.y = -200;
    block_1.x = -200;
    block_1.y = -200;
    spring_1.x = -200;
    spring_1.y = -200;
    item_power = "fire";
    tutorial.setAnimation("enemy_tutorial_1");
  }
  if (panel == 9) {
    //ground
             floor_create(300, 300, 300, 200, 200, 200, 200);
    platforms_create(-200, 200, 200, -200, -200, -200, -200);
    //enemys
    //coins
    coin_1.x = -200;
    coin_1.y = -200;
    coin_2.x = -200;
    coin_2.y = -200;
    coin_3.x = -200;
    coin_3.y = -200;
    //blocks
    enemy_1.x = 375;
    enemy_1.y = 175;
    enemy_2.x = -200;
    enemy_2.y = -200;
    block_1.x = -200;
    block_1.y = -200;
    spring_1.x = 150;
    spring_1.y = 290;
    item_power = "fire";
    tutorial.setAnimation("buffer");
  }
  if (panel == 10) {
    //ground
             floor_create(300, 300, 300, 300, 300, 300, 300);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    //coins
    coin_1.x = -200;
    coin_1.y = -200;
    coin_2.x = -200;
    coin_2.y = -200;
    coin_3.x = -200;
    coin_3.y = -200;
    //blocks
    enemy_1.x = -200;
    enemy_1.y = -200;
    enemy_2.x = -200;
    enemy_2.y = -200;
    block_1.x = -200;
    block_1.y = -200;
    spring_1.x = -200;
    spring_1.y = -200;
    tower_1.x = 325;
    tower_1.y = 145;
    item_power = "fire";
    tutorial.setAnimation("buffer");
  }
  if (panel == 11) {
    //ground
             floor_create(300, 300, 300, 300, 300, 300, 300);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    stopsound();
    stopSound("assets/boss_loop_1.mp3");
    if (music == true) {
    playSound("assets/boss_loop_1.mp3", true);
    }
    theme = "stone";
    boss_fight_1 = true;
    boss_1.x = 300;
    boss_1.y = 275;
    boss_1.velocityX = 10;
    boss_health = 3;
    //coins
    coin_1.x = -200;
    coin_1.y = -200;
    coin_2.x = -200;
    coin_2.y = -200;
    coin_3.x = -200;
    coin_3.y = -200;
    //blocks
    enemy_1.x = -200;
    enemy_1.y = -200;
    enemy_2.x = -200;
    enemy_2.y = -200;
    block_1.x = -200;
    block_1.y = -200;
    spring_1.x = -200;
    spring_1.y = -200;
    tower_1.x = -200;
    tower_1.y = -200;
    item_power = "fire";
    tutorial.setAnimation("buffer");
  }
  if (panel == 12) {
    panel = 201;
  
  }
  if (panel == 201) {
    //ground
             floor_create(300, 275, 250, 800, 800, 800, 250);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    stopsound();
    if (music == true) {
     playSound("assets/mushroom_loop_1.mp3", true);
    }
    //enemys
    world = 2;
    theme = "mushroom";
    //coins
    boss_fight_1 = false;
    
    coin_1.x = 300;
    coin_1.y = 200;
    coin_2.x = 300;
    coin_2.y = 150;
    coin_3.x = 300;
    coin_3.y = 250;
    //blocks
    enemy_1.x = -200;
    enemy_1.y = -200;
    enemy_2.x = -200;
    enemy_2.y = -200;
    block_1.x = 50;
    block_1.y = 200;
    spring_1.x = -200;
    spring_1.y = -200;
    tower_1.x = -200;
    tower_1.y = -200;
    item_power = "leaf";
    tutorial.setAnimation("leaf_power_tutorial");
  }
  if (panel == 202) {
    //ground
             floor_create(250, 800, 800, 800, 800, 800, 250);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    theme = "mushroom";
    //coins
    coin_1.x = 350;
    coin_1.y = 150;
    coin_2.x = 300;
    coin_2.y = 100;
    coin_3.x = 250;
    coin_3.y = 150;
    //blocks
    enemy_1.x = -200;
    enemy_1.y = -200;
    enemy_2.x = -200;
    enemy_2.y = -200;
    block_1.x = -200;
    block_1.y = -200;
    spring_1.x = -200;
    spring_1.y = -200;
    tower_1.x = -200;
    tower_1.y = -200;
    rotating_platform_1.x = 200;
    rotating_platform_1.y = 200;
    item_power = "leaf";
    tutorial.setAnimation("buffer");
  }
  if (panel == 203) {
    //ground
             floor_create(350, 300, 800, 800, 800, 300, 350);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    theme = "mushroom";
    //coins
    coin_1.x = 200;
    coin_1.y = 200;
    coin_2.x = 200;
    coin_2.y = 100;
    coin_3.x = 200;
    coin_3.y = 150;
    //blocks
    enemy_1.x = 350;
    enemy_1.y = 250;
    enemy_2.x = 400;
    enemy_2.y = 250;
    block_1.x = -200;
    block_1.y = -200;
    spring_1.x = -200;
    spring_1.y = -200;
    tower_1.x = -200;
    tower_1.y = -200;
    rotating_platform_1.x = -200;
    rotating_platform_1.y = -200;
    item_power = "leaf";
    tutorial.setAnimation("buffer");
  }
  if (panel == 204) {
    //ground
             floor_create(300, 300, 800, 800, 800, 800, 300);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    theme = "mushroom";
    //coins
    coin_1.x = -200;
    coin_1.y = -200;
    coin_2.x = -200;
    coin_2.y = -200;
    coin_3.x = -200;
    coin_3.y = -200;
    //blocks
    enemy_1.x = 300;
    enemy_1.y = 300;
    enemy_2.x = 400;
    enemy_2.y = 300;
    block_1.x = -200;
    block_1.y = -200;
    spring_1.x = 90;
    spring_1.y = 285;
    tower_1.x = -200;
    tower_1.y = -200;
    rotating_platform_1.x = -200;
    rotating_platform_1.y = -200;
    item_power = "leaf";
    tutorial.setAnimation("buffer");
  }
  if (panel == 205) {
    //ground
             floor_create(300, 275, 250, 800, 800, 800, 300);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    theme = "mushroom";
    //coins
    coin_1.x = 250;
    coin_1.y = 100;
    coin_2.x = 300;
    coin_2.y = 100;
    coin_3.x = 350;
    coin_3.y = 100;
    //blocks
    enemy_1.x = 350;
    enemy_1.y = 125;
    enemy_2.x = -200;
    enemy_2.y = -200;
    block_1.x = -200;
    block_1.y = -200;
    spring_1.x = -200;
    spring_1.y = -285;
    tower_1.x = -200;
    tower_1.y = -200;
    rotating_platform_1.x = 250;
    rotating_platform_1.y = 200;
    item_power = "leaf";
    tutorial.setAnimation("buffer");
  }
  if (panel == 206) {
    //ground
             floor_create(200, 800, 800, 800, 800, 800, 300);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    theme = "mushroom";
    //coins
    coin_1.x = -250;
    coin_1.y = -100;
    coin_2.x = -300;
    coin_2.y = -100;
    coin_3.x = -350;
    coin_3.y = -100;
    //blocks
    enemy_1.x = -350;
    enemy_1.y = -125;
    enemy_2.x = -200;
    enemy_2.y = -200;
    block_1.x = -200;
    block_1.y = -200;
    spring_1.x = -200;
    spring_1.y = -285;
    tower_1.x = -200;
    tower_1.y = -200;
    rotating_platform_2.x = 275;
    rotating_platform_2.y = 300;
    rotating_platform_3.x = 125;
    rotating_platform_3.y = 200;
    item_power = "leaf";
    tutorial.setAnimation("buffer");
  }
  if (panel == 207) {
    //ground
             floor_create(300, 300, 800, 800, 800, 200, 200);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    theme = "mushroom";
    //coins
    coin_1.x = 200;
    coin_1.y = 100;
    coin_2.x = 200;
    coin_2.y = 150;
    coin_3.x = 200;
    coin_3.y = 100;
    //blocks
    enemy_1.x = -350;
    enemy_1.y = -125;
    enemy_2.x = -200;
    enemy_2.y = -200;
    block_1.x = -200;
    block_1.y = -200;
    spring_1.x = -200;
    spring_1.y = -285;
    tower_1.x = -200;
    tower_1.y = -200;
    rotating_platform_2.x = 200;
    rotating_platform_2.y = 300;
    rotating_platform_3.x = -125;
    rotating_platform_3.y = -200;
    item_power = "leaf";
    tutorial.setAnimation("buffer");
  }
   if (panel == 208) {
    //ground
             floor_create(200, 250, 300, 800, 800, 800, 800);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    theme = "mushroom";
    //coins
    coin_1.x = 200;
    coin_1.y = 100;
    coin_2.x = -200;
    coin_2.y = -150;
    coin_3.x = -200;
    coin_3.y = -100;
    //blocks
    enemy_1.x = -350;
    enemy_1.y = -125;
    enemy_2.x = -200;
    enemy_2.y = -200;
    block_1.x = 250;
    block_1.y = 100;
    spring_1.x = -200;
    spring_1.y = -285;
    tower_1.x = -200;
    tower_1.y = -200;
    rotating_platform_2.x = 200;
    rotating_platform_2.y = 200;
    rotating_platform_1.x = 350;
    rotating_platform_1.y = 200;
    item_power = "leaf";
    tutorial.setAnimation("buffer");
  }
  if (panel == 209) {
    //ground
             floor_create(300, 800, 800, 800, 800, 200, 200);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    theme = "mushroom";
    //coins
    coin_1.x = 200;
    coin_1.y = 100;
    coin_2.x = 200;
    coin_2.y = 150;
    coin_3.x = 200;
    coin_3.y = 100;
    //blocks
    enemy_1.x = -350;
    enemy_1.y = -125;
    enemy_2.x = -200;
    enemy_2.y = -200;
    block_1.x = -250;
    block_1.y = -100;
    spring_1.x = 50;
    spring_1.y = 285;
    tower_1.x = -200;
    tower_1.y = -200;
    rotating_platform_2.x = 200;
    rotating_platform_2.y = 250;
    rotating_platform_1.x = -350;
    rotating_platform_1.y = -200;
    item_power = "leaf";
    tutorial.setAnimation("buffer");
  }
  if (panel == 210) {
    //ground
             floor_create(300, 300, 300, 300, 300, 300, 300);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    theme = "mushroom";
    //coins
    coin_1.x = -250;
    coin_1.y = -100;
    coin_2.x = -300;
    coin_2.y = -100;
    coin_3.x = -350;
    coin_3.y = -100;
    //blocks
    rotating_platform_2.x = -200;
    rotating_platform_2.y = -250;
    enemy_1.x = -350;
    enemy_1.y = -125;
    enemy_2.x = -200;
    enemy_2.y = -200;
    block_1.x = -200;
    block_1.y = -200;
    spring_1.x = -200;
    spring_1.y = -285;
    tower_1.x = 325;
    tower_1.y = 145;
    item_power = "leaf";
    tutorial.setAnimation("buffer");
  }
  if (panel == 211) {
    //ground
             floor_create(300, 800, 800, 800, 800, 800, 300);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    stopsound();
    if (music == true) {
     playSound("assets/boss_loop_1.mp3", true);
    }
    boss_1.setAnimation("boss_2");
 
    theme = "stone";
    boss_fight_1 = true;
    boss_1.x = 300;
    boss_1.y = 275;
    boss_1.velocityX = 10;
    boss_health = 3;
    //coins
    coin_1.x = -200;
    coin_1.y = -200;
    coin_2.x = -200;
    coin_2.y = -200;
    coin_3.x = -200;
    coin_3.y = -200;
    //blocks
    enemy_1.x = -200;
    enemy_1.y = -200;
    enemy_2.x = -200;
    enemy_2.y = -200;
    block_1.x = -200;
    block_1.y = -200;
    spring_1.x = -200;
    spring_1.y = -200;
    rotating_platform_1.x = 200;
    rotating_platform_1.y = 275;
    item_power = "fire";
    tutorial.setAnimation("buffer");
  }
   if (panel == 212) {
    panel = 301;
  
  }
  
  if (panel == 301) {
    //ground
             floor_create(300, 300, 300, 800, 275, 800, 250);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    stopsound();
    if (music == true) {
     playSound("assets/cold_loop_1.mp3", true);
    }
    boss_fight_1 = false;
    theme = "ice";
    world = 3;
    //coins
    coin_1.x = -250;
    coin_1.y = -100;
    coin_2.x = -300;
    coin_2.y = -100;
    coin_3.x = -350;
    coin_3.y = -100;
    //blocks
    enemy_1.x = -350;
    enemy_1.y = -125;
    enemy_2.x = -200;
    enemy_2.y = -200;
    block_1.x = -200;
    block_1.y = -200;
    spring_1.x = -200;
    spring_1.y = -285;
    tower_1.x = -200;
    tower_1.y = -200;
    item_power = "cold";
    tutorial.setAnimation("buffer");
  }
  if (panel == 302) {
    //ground
             floor_create(250, 300, 300, 300, 300, 800, 275);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    theme = "ice";
    //coins
    coin_1.x = -250;
    coin_1.y = -100;
    coin_2.x = -300;
    coin_2.y = -100;
    coin_3.x = -350;
    coin_3.y = -100;
    //blocks
    enemy_1.x = -350;
    enemy_1.y = -125;
    enemy_2.x = -200;
    enemy_2.y = -200;
    block_1.x = 200;
    block_1.y = 200;
    spring_1.x = 150;
    spring_1.y = 280;
    tower_1.x = -200;
    tower_1.y = -200;
    item_power = "cold";
    tutorial.setAnimation("ice_power_tutorial");
  }
  if (panel == 303) {
    //ground
             floor_create(275, 200, 200, 200, 800, 800, 200);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    theme = "ice";
    //coins
    coin_1.x = 250;
    coin_1.y = 100;
    coin_2.x = 300;
    coin_2.y = 100;
    coin_3.x = 350;
    coin_3.y = 100;
    //blocks
    enemy_1.x = 250;
    enemy_1.y = 0;
    enemy_2.x = 200;
    enemy_2.y = 0;
    block_1.x = -200;
    block_1.y = -200;
    spring_1.x = -150;
    spring_1.y = -280;
    tower_1.x = -200;
    tower_1.y = -200;
    item_power = "cold";
    tutorial.setAnimation("buffer");
  }
  if (panel == 304) {
    //ground
             floor_create(200, 200, 800, 800, 800, 800, 800);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    theme = "ice";
    //coins
    coin_1.x = 250;
    coin_1.y = 100;
    coin_2.x = 300;
    coin_2.y = 75;
    coin_3.x = 350;
    coin_3.y = 100;
    //blocks
    enemy_1.x = -250;
    enemy_1.y = 0;
    enemy_2.x = -200;
    enemy_2.y = 0;
    block_1.x = -200;
    block_1.y = -200;
    spring_1.x = -150;
    spring_1.y = -280;
    tower_1.x = -200;
    tower_1.y = -200;
    rotating_platform_1.x = 225;
    rotating_platform_1.y = 225;
    item_power = "cold";
    tutorial.setAnimation("buffer");
  }
  if (panel == 305) {
    //ground
             floor_create(300, 800, 800, 275, 800, 800, 240);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    theme = "ice";
    //coins
    coin_1.x = -250;
    coin_1.y = -100;
    coin_2.x = -300;
    coin_2.y = -75;
    coin_3.x = -350;
    coin_3.y = -100;
    //blocks
    enemy_1.x = -250;
    enemy_1.y = 0;
    enemy_2.x = -200;
    enemy_2.y = 0;
    block_1.x = -200;
    block_1.y = -200;
    spring_1.x = -150;
    spring_1.y = -280;
    tower_1.x = -200;
    tower_1.y = -200;
    rotating_platform_1.x = -225;
    rotating_platform_1.y = -225;
    item_power = "cold";
    tutorial.setAnimation("buffer");
  }
  if (panel == 306) {
    //ground
             floor_create(250, 300, 350, 300, 300, 275, 225);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    theme = "ice";
    //coins
    coin_1.x = -250;
    coin_1.y = -100;
    coin_2.x = -300;
    coin_2.y = -75;
    coin_3.x = -350;
    coin_3.y = -100;
    //blocks
    enemy_1.x = 400;
    enemy_1.y = 0;
    enemy_2.x = 350;
    enemy_2.y = 0;
    block_1.x = 300;
    block_1.y = 200;
    spring_1.x = -150;
    spring_1.y = -280;
    tower_1.x = -200;
    tower_1.y = -200;
    rotating_platform_1.x = -225;
    rotating_platform_1.y = -225;
    item_power = "cold";
    tutorial.setAnimation("buffer");
  }
  if (panel == 307) {
    //ground
             floor_create(225, 275, 350, 350, 800, 800, 200);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    theme = "ice";
    //coins
    coin_1.x = -250;
    coin_1.y = -100;
    coin_2.x = -300;
    coin_2.y = -75;
    coin_3.x = -350;
    coin_3.y = -100;
    //blocks
    enemy_1.x = -400;
    enemy_1.y = 0;
    enemy_2.x = -350;
    enemy_2.y = 0;
    block_1.x = -300;
    block_1.y = -200;
    spring_1.x = 250;
    spring_1.y = 330;
    tower_1.x = -200;
    tower_1.y = -200;
    rotating_platform_1.x = -225;
    rotating_platform_1.y = -225;
    item_power = "cold";
    tutorial.setAnimation("buffer");
  }
  if (panel == 308) {
    //ground
             floor_create(200, 300, 350, 350, 350, 200, 200);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    theme = "ice";
    //coins
    coin_1.x = -250;
    coin_1.y = -100;
    coin_2.x = -300;
    coin_2.y = -75;
    coin_3.x = -350;
    coin_3.y = -100;
    //blocks
    enemy_1.x = 400;
    enemy_1.y = 0;
    enemy_2.x = 350;
    enemy_2.y = 0;
    block_1.x = 250;
    block_1.y = 200;
    spring_1.x = 250;
    spring_1.y = 330;
    tower_1.x = -200;
    tower_1.y = -200;
    rotating_platform_1.x = -225;
    rotating_platform_1.y = -225;
    item_power = "cold";
    tutorial.setAnimation("buffer");
  }
  if (panel == 309) {
    //ground
             floor_create(300, 800, 300, 800, 300, 800, 300);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    theme = "ice";
    //coins
    coin_1.x = -250;
    coin_1.y = -100;
    coin_2.x = -300;
    coin_2.y = -75;
    coin_3.x = -350;
    coin_3.y = -100;
    //blocks
    enemy_1.x = -400;
    enemy_1.y = 0;
    enemy_2.x = -350;
    enemy_2.y = 0;
    block_1.x = -250;
    block_1.y = -200;
    spring_1.x = -250;
    spring_1.y = -330;
    tower_1.x = -200;
    tower_1.y = -200;
    rotating_platform_1.x = -225;
    rotating_platform_1.y = -225;
    item_power = "cold";
    tutorial.setAnimation("buffer");
  }
  if (panel == 310) {
    //ground
             floor_create(300, 300, 300, 300, 300, 300, 300);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    theme = "ice";
    //coins
    coin_1.x = -250;
    coin_1.y = -100;
    coin_2.x = -300;
    coin_2.y = -100;
    coin_3.x = -350;
    coin_3.y = -100;
    //blocks
    enemy_1.x = -350;
    enemy_1.y = -125;
    enemy_2.x = -200;
    enemy_2.y = -200;
    block_1.x = -200;
    block_1.y = -200;
    spring_1.x = -200;
    spring_1.y = -285;
    tower_1.x = 325;
    tower_1.y = 145;
    item_power = "leaf";
    tutorial.setAnimation("buffer");
  }
  if (panel == 311) {
    //ground
             floor_create(300, 300, 300, 300, 300, 300, 300);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    stopsound();
    stopSound("assets/boss_loop_1.mp3");
    if (music == true) {
       playSound("assets/boss_loop_1.mp3", true);
    }
    theme = "ice";
    boss_fight_1 = true;
    boss_1.x = 300;
    boss_1.y = 275;
    boss_1.velocityX = 10;
    boss_health = 3;
    //coins
    coin_1.x = -200;
    coin_1.y = -200;
    coin_2.x = -200;
    coin_2.y = -200;
    coin_3.x = -200;
    coin_3.y = -200;
    //blocks
    enemy_1.x = -200;
    enemy_1.y = -200;
    enemy_2.x = -200;
    enemy_2.y = -200;
    block_1.x = -200;
    block_1.y = -200;
    spring_1.x = -200;
    spring_1.y = -200;
    tower_1.x = -200;
    tower_1.y = -200;
    item_power = "fire";
    tutorial.setAnimation("buffer");
  }
   if (panel == 312) {
    panel = 401;
  
  }
  if (panel == 401) {
    //ground
             floor_create(300, 300, 300, 300, 300, 275, 250);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    world = 4;
    theme = "sand";
    stopsound();
    if (music == true) {
      playSound("assets/overworld_loop_1.mp3", true);
    }
    //coins
    boss_fight_1 = false;
    coin_1.x = -250;
    coin_1.y = -100;
    coin_2.x = -300;
    coin_2.y = -100;
    coin_3.x = -350;
    coin_3.y = -100;
    //blocks
    enemy_1.x = 200;
    enemy_1.y = 275;
    enemy_2.x = -200;
    enemy_2.y = -200;
    block_1.x = 250;
    block_1.y = 200;
    spring_1.x = -200;
    spring_1.y = -285;
    tower_1.x = -325;
    tower_1.y = -145;
    item_power = "fire";
    tutorial.setAnimation("buffer");
  }
  if (panel == 402) {
    //ground
             floor_create(300, 800, 800, 800, 800, 800, 300);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    theme = "sand";
    //coins
    boss_fight_1 = false;
    coin_1.x = 150;
    coin_1.y = 275;
    coin_2.x = 200;
    coin_2.y = 275;
    coin_3.x = 250;
    coin_3.y = 275;
    //blocks
    enemy_1.x = -200;
    enemy_1.y = -275;
    enemy_2.x = -200;
    enemy_2.y = -200;
    block_1.x = -250;
    block_1.y = -200;
    spring_1.x = -200;
    spring_1.y = -285;
    wheel_1.x = 275;
    wheel_1.y = 350;
    wheel_2.x = 125;
    wheel_2.y = 350;
    item_power = "fire";
    tutorial.setAnimation("buffer");
  }
  
  
  if (panel == 403) {
    //ground
             floor_create(300, 300, 300, 800, 200, 200, 200);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    theme = "sand";
    //coins
    boss_fight_1 = false;
    coin_1.x = 150;
    coin_1.y = 200;
    coin_2.x = 160;
    coin_2.y = 160;
    coin_3.x = 200;
    coin_3.y = 150;
    //blocks
    enemy_1.x = -200;
    enemy_1.y = -275;
    enemy_2.x = -200;
    enemy_2.y = -200;
    block_1.x = -250;
    block_1.y = -200;
    spring_1.x = -200;
    spring_1.y = -285;
    wheel_1.x = 265;
    wheel_1.y = 220;
    wheel_2.x = 135;
    wheel_2.y = 300;
    item_power = "fire";
    tutorial.setAnimation("buffer");
  }
  
  if (panel == 404) {
    //ground
             floor_create(200, 800, 800, 250, 800, 800, 300);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    theme = "sand";
    //coins
    boss_fight_1 = false;
    coin_1.x = -150;
    coin_1.y = -200;
    coin_2.x = -160;
    coin_2.y = -160;
    coin_3.x = -200;
    coin_3.y = -150;
    //blocks
    enemy_1.x = -200;
    enemy_1.y = -275;
    enemy_2.x = -200;
    enemy_2.y = -200;
    block_1.x = -250;
    block_1.y = -200;
    spring_1.x = -200;
    spring_1.y = -285;
    wheel_1.x = -265;
    wheel_1.y = -220;
    wheel_2.x = -135;
    wheel_2.y = -300;
    item_power = "fire";
    tutorial.setAnimation("buffer");
  }
  
  if (panel == 405) {
    //ground
             floor_create(300, 300, 300, 800, 800, 800, 800);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    theme = "sand";
    //coins
    boss_fight_1 = false;
    coin_1.x = -150;
    coin_1.y = -200;
    coin_2.x = -160;
    coin_2.y = -160;
    coin_3.x = -200;
    coin_3.y = -150;
    //blocks
    enemy_1.x = -200;
    enemy_1.y = -275;
    enemy_2.x = -200;
    enemy_2.y = -200;
    block_1.x = -250;
    block_1.y = -200;
    spring_1.x = -200;
    spring_1.y = -285;
    wheel_1.x = 150;
    wheel_1.y = 300;
    wheel_2.x = -135;
    wheel_2.y = -300;
    rotating_platform_1.x = 250;
    rotating_platform_1.y = 200;
    item_power = "fire";
    tutorial.setAnimation("buffer");
  }
  
  if (panel == 406) {
    //ground
             floor_create(300, 300, 300, 275, 250, 225, 200);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    theme = "sand";
    //coins
    boss_fight_1 = false;
    coin_1.x = -150;
    coin_1.y = -200;
    coin_2.x = -160;
    coin_2.y = -160;
    coin_3.x = -200;
    coin_3.y = -150;
    //blocks
    enemy_1.x = 400;
    enemy_1.y = 175;
    enemy_2.x = 350;
    enemy_2.y = 175;
    block_1.x = -250;
    block_1.y = -200;
    spring_1.x = -200;
    spring_1.y = -285;
    wheel_1.x = -150;
    wheel_1.y = -300;
    wheel_2.x = -135;
    wheel_2.y = -300;
    rotating_platform_1.x = -250;
    rotating_platform_1.y = -200;
    item_power = "fire";
    tutorial.setAnimation("buffer");
  }
  if (panel == 407) {
    //ground
             floor_create(300, 800, 800, 800, 800, 800, 800);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    theme = "sand";
    //coins
    boss_fight_1 = false;
    coin_1.x = -150;
    coin_1.y = -200;
    coin_2.x = -160;
    coin_2.y = -160;
    coin_3.x = -200;
    coin_3.y = -150;
    //blocks
    enemy_1.x = -400;
    enemy_1.y = -175;
    enemy_2.x = -350;
    enemy_2.y = -175;
    block_1.x = -250;
    block_1.y = -200;
    spring_1.x = -200;
    spring_1.y = -285;
    wheel_1.x = 150;
    wheel_1.y = 300;
    wheel_2.x = 275;
    wheel_2.y = 200;
    rotating_platform_1.x = -250;
    rotating_platform_1.y = -200;
    item_power = "fire";
    tutorial.setAnimation("buffer");
  }
  if (panel == 408) {
    //ground
             floor_create(300, 300, 300, 300, 300, 300, 300);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    theme = "sand";
    //coins
    coin_1.x = -250;
    coin_1.y = -100;
    coin_2.x = -300;
    coin_2.y = -100;
    coin_3.x = -350;
    coin_3.y = -100;
    //blocks
    enemy_1.x = -350;
    enemy_1.y = -125;
    enemy_2.x = -200;
    enemy_2.y = -200;
    block_1.x = -200;
    block_1.y = -200;
    spring_1.x = -200;
    spring_1.y = -285;
    tower_1.x = 325;
    tower_1.y = 145;
    wheel_1.x = -150;
    wheel_1.y = -300;
    wheel_2.x = -275;
    wheel_2.y = -200;
    item_power = "leaf";
    tutorial.setAnimation("buffer");
  }
  
   if (panel == 409) {
    //ground
             floor_create(300, 300, 300, 300, 300, 300, 300);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    stopsound();
    stopSound("assets/boss_loop_1.mp3");
    if (music == true) {
    playSound("assets/boss_loop_1.mp3", true);
    }
    theme = "stone";
    boss_fight_1 = true;
    boss_1.x = 300;
    boss_1.y = 275;
    boss_1.velocityX = 10;
    boss_health = 5;
    //coins
    coin_1.x = -200;
    coin_1.y = -200;
    coin_2.x = -200;
    coin_2.y = -200;
    coin_3.x = -200;
    coin_3.y = -200;
    //blocks
    enemy_1.x = -200;
    enemy_1.y = -200;
    enemy_2.x = -200;
    enemy_2.y = -200;
    block_1.x = -200;
    block_1.y = -200;
    spring_1.x = -200;
    spring_1.y = -200;
    tower_1.x = -200;
    tower_1.y = -200;
    wheel_1.x = -150;
    wheel_1.y = -300;
    wheel_2.x = -275;
    wheel_2.y = -200;
    item_power = "fire";
    tutorial.setAnimation("buffer");
  }
  
  if (panel == 410) {
    panel = 501;
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  if (panel == 501) {
    //ground
             floor_create(300, 300, 300, 800, 250, 800, 250);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    stopsound();
    stopSound("assets/boss_loop_1.mp3");
    if (music == true) {
      playSound("assets/lava_loop_1.mp3", true);
    }
    theme = "lava";
    boss_fight_1 = false;
    world = 5;
    //coins
    lava_1.x = 200;
    coin_1.x = -250;
    coin_1.y = -100;
    coin_2.x = -300;
    coin_2.y = -100;
    coin_3.x = -350;
    coin_3.y = -100;
    //blocks
    enemy_1.x = -350;
    enemy_1.y = -125;
    enemy_2.x = -200;
    enemy_2.y = -200;
    block_1.x = 75;
    block_1.y = 210;
    spring_1.x = -200;
    spring_1.y = -285;
    tower_1.x = -325;
    tower_1.y = -145;
    lava_1.x = 200;
    item_power = "leaf";
    tutorial.setAnimation("buffer");
  }
  if (panel == 502) {
    //ground
             floor_create(250, 375, 375, 375, 375, 375, 300);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    theme = "lava";
    boss_fight_1 = false;
    //coins
    lava_1.x = 200;
    coin_1.x = 200;
    coin_1.y = 350;
    coin_2.x = 250;
    coin_2.y = 350;
    coin_3.x = 150;
    coin_3.y = 350;
    //blocks
    enemy_1.x = -350;
    enemy_1.y = -125;
    enemy_2.x = -200;
    enemy_2.y = -200;
    block_1.x = -75;
    block_1.y = -210;
    spring_1.x = -200;
    spring_1.y = -285;
    tower_1.x = -325;
    tower_1.y = -145;
    item_power = "leaf";
    tutorial.setAnimation("buffer");
  }
  if (panel == 503) {
    //ground
             floor_create(300, 375, 375, 250, 375, 375, 250);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    theme = "lava";
    boss_fight_1 = false;
    //coins
    lava_1.x = 200;
    coin_1.x = -200;
    coin_1.y = 350;
    coin_2.x = -250;
    coin_2.y = 350;
    coin_3.x = -150;
    coin_3.y = 350;
    //blocks
    enemy_1.x = -350;
    enemy_1.y = -125;
    enemy_2.x = -200;
    enemy_2.y = -200;
    block_1.x = -75;
    block_1.y = -210;
    spring_1.x = -200;
    spring_1.y = -285;
    tower_1.x = -325;
    tower_1.y = -145;
    item_power = "leaf";
    tutorial.setAnimation("buffer");
  }
  if (panel == 504) {
    //ground
             floor_create(250, 400, 400, 400, 400, 400, 250);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    theme = "lava";
    //coins
    lava_create = 1;
    coin_1.x = -200;
    coin_1.y = 350;
    coin_2.x = -250;
    coin_2.y = 350;
    coin_3.x = -150;
    coin_3.y = 350;
    //blocks
    enemy_1.x = -350;
    enemy_1.y = -125;
    enemy_2.x = -200;
    enemy_2.y = -200;
    block_1.x = -75;
    block_1.y = -210;
    spring_1.x = -200;
    spring_1.y = -285;
    tower_1.x = -325;
    tower_1.y = -145;
    rotating_platform_1.x = 225;
    rotating_platform_1.y = 325;
    item_power = "leaf";
    tutorial.setAnimation("buffer");
  }
  if (panel == 505) {
    //ground
             floor_create(200, 350, 360, 340, 310, 390, 300);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    theme = "lava";
    boss_fight_1 = false;
    //coins
    lava_1.x = 200;
    coin_1.x = -200;
    coin_1.y = 350;
    coin_2.x = -250;
    coin_2.y = 350;
    coin_3.x = -150;
    coin_3.y = 350;
    //blocks
    enemy_1.x = -350;
    enemy_1.y = -125;
    enemy_2.x = -200;
    enemy_2.y = -200;
    block_1.x = -75;
    block_1.y = -210;
    spring_1.x = -200;
    spring_1.y = -285;
    tower_1.x = -325;
    tower_1.y = -145;
    rotating_platform_1.x = -225;
    rotating_platform_1.y = -325;
    item_power = "leaf";
    tutorial.setAnimation("buffer");
  }
  if (panel == 506) {
    //ground
             floor_create(300, 310, 310, 310, 310, 200, 200);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    theme = "lava";
    boss_fight_1 = false;
    //coins
    lava_1.x = 200;
    coin_1.x = -200;
    coin_1.y = 350;
    coin_2.x = -250;
    coin_2.y = 350;
    coin_3.x = -150;
    coin_3.y = 350;
    //blocks
    enemy_1.x = 400;
    enemy_1.y = 0;
    enemy_2.x = 375;
    enemy_2.y = 0;
    block_1.x = -75;
    block_1.y = -210;
    spring_1.x = -200;
    spring_1.y = -285;
    tower_1.x = -325;
    tower_1.y = -145;
    rotating_platform_1.x = -225;
    rotating_platform_1.y = -325;
    item_power = "leaf";
    tutorial.setAnimation("buffer");
  }
    if (panel == 507) {
    //ground
             floor_create(300, 800, 800, 800, 800, 800, 300);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    theme = "lava";
    boss_fight_1 = false;
    //coins
    lava_1.x = 200;
    coin_1.x = -200;
    coin_1.y = 350;
    coin_2.x = -250;
    coin_2.y = 350;
    coin_3.x = -150;
    coin_3.y = 350;
    //blocks
    enemy_1.x = -400;
    enemy_1.y = 0;
    enemy_2.x = -375;
    enemy_2.y = 0;
    block_1.x = -75;
    block_1.y = -210;
    spring_1.x = -200;
    spring_1.y = -285;
    rotating_platform_2.x = 125;
    rotating_platform_2.y = 375;
    rotating_platform_3.x = 275;
    rotating_platform_3.y = 375;
    tower_1.x = -325;
    tower_1.y = -145;
    rotating_platform_1.x = -225;
    rotating_platform_1.y = -325;
    item_power = "leaf";
    tutorial.setAnimation("buffer");

  }
  if (panel == 508) {
    //ground
             floor_create(300, 300, 300, 300, 300, 300, 300);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    theme = "lava";
    boss_fight_1 = false;
    //coins
    lava_1.x = 200;
    coin_1.x = -200;
    coin_1.y = 350;
    coin_2.x = -250;
    coin_2.y = 350;
    coin_3.x = -150;
    coin_3.y = 350;
    //blocks
    enemy_1.x = -200;
    enemy_1.y = 0;
    enemy_2.x = -200;
    enemy_2.y = 0;
    block_1.x = -75;
    block_1.y = -210;
    spring_1.x = -200;
    spring_1.y = -285;
    tower_1.x = -325;
    tower_1.y = -145;
    rotating_platform_1.x = -225;
    rotating_platform_1.y = -325;
    rotating_platform_2.x = -225;
    rotating_platform_2.y = -325;
    rotating_platform_3.x = -225;
    rotating_platform_3.y = -325;
    tower_1.x = 325;
    tower_1.y = 145;
    item_power = "leaf";
    tutorial.setAnimation("buffer");
    
    
  }
  
  
  
  
  if (panel == 509) {
    //ground
             floor_create(300, 300, 300, 300, 300, 300, 300);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    world = 5;
    theme = "lava";
    boss_fight_1 = false;
    //coins
    lava_1.x = -200;
    coin_1.x = -200;
    coin_1.y = 350;
    coin_2.x = -250;
    coin_2.y = 350;
    coin_3.x = -150;
    coin_3.y = 350;
    //blocks
    enemy_1.x = -200;
    enemy_1.y = 0;
    enemy_2.x = -200;
    enemy_2.y = 0;
    block_1.x = -75;
    block_1.y = -210;
    spring_1.x = -200;
    spring_1.y = -285;
    rotating_platform_1.x = -225;
    rotating_platform_1.y = -325;
    castle_1.x = 275;
    castle_1.y = 145;
    item_power = "leaf";
    tutorial.setAnimation("buffer");
  }
  if (panel == 510) {
    //ground
             floor_create(320, 320, 320, 320, 320, 320, 320);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    stopsound();
    stopSound("assets/boss_loop_1.mp3");
    if (music == true) {
      playSound("assets/boss_loop_1.mp3", true);
    }
    theme = "stone";
    boss_fight_1 = true;
    boss_1.x = 350;
    boss_1.y = 275;
    boss_1.velocityX = 10;
    boss_health = 6;
    //coins
    coin_1.x = -200;
    coin_1.y = -200;
    coin_2.x = -200;
    coin_2.y = -200;
    coin_3.x = -200;
    coin_3.y = -200;
    //blocks
    enemy_1.x = -200;
    enemy_1.y = -200;
    enemy_2.x = -200;
    enemy_2.y = -200;
    block_1.x = -200;
    block_1.y = -200;
    spring_1.x = -200;
    spring_1.y = -200;
    tower_1.x = -200;
    tower_1.y = -200;
    item_power = "fire";
    tutorial.setAnimation("buffer");
  }
  if (panel == 511) {
    panel = 601;
  }
  
  if (panel == 601) {
    //ground
             floor_create(300, 300, 300, 300, 300, 300, 300);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    phase = 2;
    cut_2 = 1;
    world = 5;
    king_1.scale = 1;
    king_1.setAnimation("king_2");
    stopSound("assets/boss_loop_1.mp3");
    theme = "stone";
    boss_fight_1 = false;
    //coins
    lava_1.x = -200;
    coin_1.x = -200;
    coin_1.y = 350;
    coin_2.x = -250;
    coin_2.y = 350;
    coin_3.x = -150;
    coin_3.y = 350;
    //blocks
    enemy_1.x = -200;
    enemy_1.y = 0;
    enemy_2.x = -200;
    enemy_2.y = 0;
    block_1.x = -75;
    block_1.y = -210;
    spring_1.x = -200;
    spring_1.y = -285;
    rotating_platform_1.x = -225;
    rotating_platform_1.y = -325;
    fluff.setAnimation("fluff_1_cage");
    fluff.x = 300;
    fluff.y = 75;
    item_power = "leaf";
    tutorial.setAnimation("buffer");
  }
  if (panel == 602) {
    //ground
             floor_create(300, 300, 300, 300, 300, 300, 300);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    stopSound("assets/category_background/fantasy.mp3");
    if (music == true) {
      playSound("assets/category_background/fantasy.mp3", false);
    }
    
    world = 5;
    theme = "lava";
    boss_fight_1 = false;
    //coins
    king_1_huge.x = 700;
    king_1_huge.velocityX = -3;
    lava_1.x = -200;
    coin_1.x = -200;
    coin_1.y = 350;
    coin_2.x = -250;
    coin_2.y = 350;
    coin_3.x = -150;
    coin_3.y = 350;
    //blocks
    enemy_1.x = -200;
    enemy_1.y = 0;
    enemy_2.x = -200;
    enemy_2.y = 0;
    block_1.x = -75;
    block_1.y = -210;
    spring_1.x = -200;
    spring_1.y = -285;
    rotating_platform_1.x = -225;
    rotating_platform_1.y = -325;
    castle_1.x = 275;
    castle_1.y = 145;
    king_1.x = -2000;
    king_1.y = -2000;
    cut_2 = 5;
    
    item_power = "leaf";
    tutorial.setAnimation("buffer");
  }
  if (panel == 603) {
    //ground
             floor_create(250, 400, 400, 400, 400, 400, 250);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    theme = "lava";
    boss_fight_1 = false;
    //coins
     king_1_huge.x = 750;
    lava_1.x = 200;
    coin_1.x = -200;
    coin_1.y = 350;
    coin_2.x = -250;
    coin_2.y = 350;
    coin_3.x = -150;
    coin_3.y = 350;
    //blocks
    enemy_1.x = -350;
    enemy_1.y = -125;
    enemy_2.x = -200;
    enemy_2.y = -200;
    block_1.x = -75;
    block_1.y = -210;
    spring_1.x = -200;
    spring_1.y = -285;
    tower_1.x = -325;
    tower_1.y = -145;
    rotating_platform_1.x = 225;
    rotating_platform_1.y = 325;
    item_power = "leaf";
    tutorial.setAnimation("buffer");
  }
  if (panel == 604) {
    //ground
             floor_create(300, 300, 300, 800, 250, 800, 250);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    stopsound();
    stopSound("assets/boss_loop_1.mp3");
    theme = "lava";
    boss_fight_1 = false;
    //coins
    king_1_huge.x = 750;
    lava_1.x = 200;
    coin_1.x = -250;
    coin_1.y = -100;
    coin_2.x = -300;
    coin_2.y = -100;
    coin_3.x = -350;
    coin_3.y = -100;
    //blocks
    enemy_1.x = -350;
    enemy_1.y = -125;
    enemy_2.x = -200;
    enemy_2.y = -200;
    block_1.x = 75;
    block_1.y = 210;
    spring_1.x = -200;
    spring_1.y = -285;
    tower_1.x = -325;
    tower_1.y = -145;
    lava_1.x = 200;
    item_power = "leaf";
    tutorial.setAnimation("buffer");
  }
  
  if (panel == 605) {
    //ground
             floor_create(200, 800, 800, 250, 800, 800, 300);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    lava_1.x = -1000;
    king_1_huge.x = 750;
    theme = "sand";
    //coins
    boss_fight_1 = false;
    coin_1.x = -150;
    coin_1.y = -200;
    coin_2.x = -160;
    coin_2.y = -160;
    coin_3.x = -200;
    coin_3.y = -150;
    //blocks
    enemy_1.x = -200;
    enemy_1.y = -275;
    enemy_2.x = -200;
    enemy_2.y = -200;
    block_1.x = -250;
    block_1.y = -200;
    spring_1.x = -200;
    spring_1.y = -285;
    wheel_1.x = -265;
    wheel_1.y = -220;
    wheel_2.x = -135;
    wheel_2.y = -300;
    item_power = "fire";
    tutorial.setAnimation("buffer");
  }
  
  if (panel == 606) {
    //ground
             floor_create(300, 300, 300, 800, 800, 800, 200);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    theme = "sand";
    //coins
    king_1_huge.x = 750;
    boss_fight_1 = false;
    coin_1.x = -150;
    coin_1.y = -200;
    coin_2.x = -160;
    coin_2.y = -160;
    coin_3.x = -200;
    coin_3.y = -150;
    //blocks
    enemy_1.x = -200;
    enemy_1.y = -275;
    enemy_2.x = -200;
    enemy_2.y = -200;
    block_1.x = -250;
    block_1.y = -200;
    spring_1.x = -200;
    spring_1.y = -285;
    wheel_1.x = 150;
    wheel_1.y = 300;
    wheel_2.x = -135;
    wheel_2.y = -300;
    rotating_platform_1.x = 250;
    rotating_platform_1.y = 200;
    item_power = "fire";
    tutorial.setAnimation("buffer");
  }
  if (panel == 607) {
    //ground
             floor_create(225, 275, 350, 350, 800, 800, 200);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    lava_1.x = -1000;
    theme = "ice";
    //coins
    king_1_huge.x = 750;
    coin_1.x = -250;
    coin_1.y = -100;
    coin_2.x = -300;
    coin_2.y = -75;
    coin_3.x = -350;
    coin_3.y = -100;
    //blocks
    enemy_1.x = -400;
    enemy_1.y = 0;
    enemy_2.x = -350;
    enemy_2.y = 0;
    block_1.x = -300;
    block_1.y = -200;
    spring_1.x = 250;
    spring_1.y = 330;
    tower_1.x = -200;
    tower_1.y = -200;
    rotating_platform_1.x = -225;
    rotating_platform_1.y = -225;
    rotating_platform_2.x = -225;
    rotating_platform_2.y = -225;
    rotating_platform_3.x = -225;
    rotating_platform_3.y = -225;
    wheel_1.x = -225;
    wheel_2.x = -225;
   
    item_power = "cold";
    tutorial.setAnimation("buffer");
  }
  if (panel == 608) {
    //ground
             floor_create(300, 800, 800, 275, 800, 240, 240);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    theme = "ice";
    king_1_huge.x = 750;
    //coins
    hero.x = 385;
    coin_1.x = -250;
    coin_1.y = -100;
    coin_2.x = -300;
    coin_2.y = -75;
    coin_3.x = -350;
    coin_3.y = -100;
    //blocks
    enemy_1.x = -250;
    enemy_1.y = 0;
    enemy_2.x = -200;
    enemy_2.y = 0;
    block_1.x = -200;
    block_1.y = -200;
    spring_1.x = -150;
    spring_1.y = -280;
    tower_1.x = -200;
    tower_1.y = -200;
    rotating_platform_1.x = -225;
    rotating_platform_1.y = -225;
    item_power = "cold";
    tutorial.setAnimation("buffer");
  }
   if (panel == 609) {
    //ground
             floor_create(250, 300, 300, 300, 300, 800, 275);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    theme = "ice";
    //coins
    king_1_huge.x = 750;
    coin_1.x = -250;
    coin_1.y = -100;
    coin_2.x = -300;
    coin_2.y = -100;
    coin_3.x = -350;
    coin_3.y = -100;
    //blocks
    enemy_1.x = -350;
    enemy_1.y = -125;
    enemy_2.x = -200;
    enemy_2.y = -200;
    block_1.x = 200;
    block_1.y = 200;
    spring_1.x = 150;
    spring_1.y = 280;
    tower_1.x = -200;
    tower_1.y = -200;
    item_power = "cold";
    tutorial.setAnimation("ice_power_tutorial");
  }
  if (panel == 608) {
    //ground
             floor_create(300, 275, 275, 800, 800, 800, 300);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    theme = "mushroom";
    //coins
    king_1_huge.x = 750;
    coin_1.x = 250;
    coin_1.y = 100;
    coin_2.x = 300;
    coin_2.y = 100;
    coin_3.x = 350;
    coin_3.y = 100;
    //blocks
    enemy_1.x = 350;
    enemy_1.y = 125;
    enemy_2.x = -200;
    enemy_2.y = -200;
    block_1.x = -200;
    block_1.y = -200;
    spring_1.x = -200;
    spring_1.y = -285;
    tower_1.x = -200;
    tower_1.y = -200;
    rotating_platform_2.x = 250;
    rotating_platform_2.y = 300;
    item_power = "leaf";
    tutorial.setAnimation("buffer");
  }
  if (panel == 609) {
    //ground
             floor_create(250, 800, 800, 800, 800, 250, 250);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    theme = "mushroom";
    king_1_huge.x = 750;
    //coins
    coin_1.x = 350;
    coin_1.y = 150;
    coin_2.x = 300;
    coin_2.y = 100;
    coin_3.x = 250;
    coin_3.y = 150;
    //blocks
    enemy_1.x = -200;
    enemy_1.y = -200;
    enemy_2.x = -200;
    enemy_2.y = -200;
    block_1.x = -200;
    block_1.y = -200;
    spring_1.x = -200;
    spring_1.y = -200;
    tower_1.x = -200;
    tower_1.y = -200;
    rotating_platform_1.x = 200;
    rotating_platform_1.y = 250;
    rotating_platform_2.x = -200;
    rotating_platform_2.y = -200;
    item_power = "leaf";
    tutorial.setAnimation("buffer");
  }
   if (panel == 610) {
    //ground
             floor_create(200, 800, 200, 800, 200, 800, 200);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    //blocks
    theme = "overworld";
    phase = 2;
    king_1_huge.x = 750;
    enemy_1.x = -200;
    enemy_1.y = -200;
    enemy_2.x = -200;
    enemy_2.y = -200;
    block_1.x = -200;
    block_1.y = -200;
    spring_1.x = -200;
    spring_1.y = -200;
    item_power = "fire";
    tutorial.setAnimation("buffer");
   }
   if (panel == 611) {
    //ground
    floor_create(300, 300, 300, 300, 200, 200, 200);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    king_1_huge.x = 750;
    //coins
    coin_1.x = 200;
    coin_1.y = 250;
    coin_2.x = 200;
    coin_2.y = 200;
    coin_3.x = 200;
    coin_3.y = 150;
    //blocks
    enemy_1.x = -200;
    enemy_1.y = -200;
    enemy_2.x = -200;
    enemy_2.y = -200;
    block_1.x = -200;
    block_1.y = -200;
    spring_1.x = 200;
    spring_1.y = 280;
    item_power = "fire";
    tutorial.setAnimation("buffer");
  }
    if (panel == 612) {
    //ground
    floor_create(275, 275, 300, 300, 300, 300, 300);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    //enemys
    king_1_huge.x = 750;
    //coins
    coin_1.x = -200;
    coin_1.y = -250;
    coin_2.x = -200;
    coin_2.y = -200;
    coin_3.x = -200;
    coin_3.y = -150;
    //blocks
    enemy_1.x = -200;
    enemy_1.y = -200;
    enemy_2.x = -200;
    enemy_2.y = -200;
    block_1.x = -200;
    block_1.y = -200;
    switch_1.x = 50;
    switch_1.y = 260;
    item_power = "fire";
    tutorial.setAnimation("buffer");
      }

}


function draw() {
  if (theme == "overworld") {
    background("cyan");
    floor_1.setAnimation("floor_1");
    floor_2.setAnimation("floor_1");
    floor_3.setAnimation("floor_1");
    floor_4.setAnimation("floor_1");
    floor_5.setAnimation("floor_1");
    floor_6.setAnimation("floor_1");
    floor_7.setAnimation("floor_1");
    ground_1.setAnimation("ground_1");
    ground_2.setAnimation("ground_1");
    ground_3.setAnimation("ground_1");
    ground_4.setAnimation("ground_1");
    ground_5.setAnimation("ground_1");
    ground_6.setAnimation("ground_1");
    ground_7.setAnimation("ground_1");
  } else if (theme == "stone") {
    background("grey");
    floor_1.setAnimation("floor_1_stone");
    floor_2.setAnimation("floor_1_stone");
    floor_3.setAnimation("floor_1_stone");
    floor_4.setAnimation("floor_1_stone");
    floor_5.setAnimation("floor_1_stone");
    floor_6.setAnimation("floor_1_stone");
    floor_7.setAnimation("floor_1_stone");
    ground_1.setAnimation("ground_1_stone");
    ground_2.setAnimation("ground_1_stone");
    ground_3.setAnimation("ground_1_stone");
    ground_4.setAnimation("ground_1_stone");
    ground_5.setAnimation("ground_1_stone");
    ground_6.setAnimation("ground_1_stone");
    ground_7.setAnimation("ground_1_stone");
  } else if (theme == "mushroom") {
    background("cyan");
    floor_1.setAnimation("floor_1_mushroom");
    floor_2.setAnimation("floor_1_mushroom");
    floor_3.setAnimation("floor_1_mushroom");
    floor_4.setAnimation("floor_1_mushroom");
    floor_5.setAnimation("floor_1_mushroom");
    floor_6.setAnimation("floor_1_mushroom");
    floor_7.setAnimation("floor_1_mushroom");
    ground_1.setAnimation("ground_1_mushroom");
    ground_2.setAnimation("ground_1_mushroom");
    ground_3.setAnimation("ground_1_mushroom");
    ground_4.setAnimation("ground_1_mushroom");
    ground_5.setAnimation("ground_1_mushroom");
    ground_6.setAnimation("ground_1_mushroom");
    ground_7.setAnimation("ground_1_mushroom");
  } else if (theme == "ice") {
    if (panel == 311) {
      background("grey");
    } else {
      background("blue");
    }
    floor_1.setAnimation("floor_1_ice");
    floor_2.setAnimation("floor_1_ice");
    floor_3.setAnimation("floor_1_ice");
    floor_4.setAnimation("floor_1_ice");
    floor_5.setAnimation("floor_1_ice");
    floor_6.setAnimation("floor_1_ice");
    floor_7.setAnimation("floor_1_ice");
    ground_1.setAnimation("ground_1_ice");
    ground_2.setAnimation("ground_1_ice");
    ground_3.setAnimation("ground_1_ice");
    ground_4.setAnimation("ground_1_ice");
    ground_5.setAnimation("ground_1_ice");
    ground_6.setAnimation("ground_1_ice");
    ground_7.setAnimation("ground_1_ice");
  } else if (theme == "lava") {
    background("maroon");
    if (lava_create == 0) {
      lava_create = 1;
    }
    floor_1.setAnimation("floor_1_lava");
    floor_2.setAnimation("floor_1_lava");
    floor_3.setAnimation("floor_1_lava");
    floor_4.setAnimation("floor_1_lava");
    floor_5.setAnimation("floor_1_lava");
    floor_6.setAnimation("floor_1_lava");
    floor_7.setAnimation("floor_1_lava");
    ground_1.setAnimation("ground_1_lava");
    ground_2.setAnimation("ground_1_lava");
    ground_3.setAnimation("ground_1_lava");
    ground_4.setAnimation("ground_1_lava");
    ground_5.setAnimation("ground_1_lava");
    ground_6.setAnimation("ground_1_lava");
    ground_7.setAnimation("ground_1_lava");
  } else if (theme == "sand") {
    background("orange");
    floor_1.setAnimation("floor_1_sand");
    floor_2.setAnimation("floor_1_sand");
    floor_3.setAnimation("floor_1_sand");
    floor_4.setAnimation("floor_1_sand");
    floor_5.setAnimation("floor_1_sand");
    floor_6.setAnimation("floor_1_sand");
    floor_7.setAnimation("floor_1_sand");
    ground_1.setAnimation("ground_1_sand");
    ground_2.setAnimation("ground_1_sand");
    ground_3.setAnimation("ground_1_sand");
    ground_4.setAnimation("ground_1_sand");
    ground_5.setAnimation("ground_1_sand");
    ground_6.setAnimation("ground_1_sand");
    ground_7.setAnimation("ground_1_sand");
  }
  if (credits == 0) {
    stroke("black");
    textSize(20);
    text(" coins; "+ coin_display +" world; " + world + "/5 " + " panel; " + panel, 0, 15);
  }
  //hero mechanics
  hero.velocityY = hero.velocityY + 1;
  jump_sound_timer = jump_sound_timer + 1;
  boss_dammaged_timer = boss_dammaged_timer + 1;
  double_jump_timer = double_jump_timer + 1;
  coin_display = coins + total_coins;
  skiploop = skiploop + 1;
  lava_rise = lava_rise + 1;
  
  if (keyWentDown("s")) {
    skips = skips + 1;
    if (phase == 1) {
      hero.x = 401;
      hero.y = floor_1.y + -100;
    }
    if (phase == 2) {
      hero.x = -1;
      hero.y = floor_1.y + -100;
    }
  }
  
  
  
  
  if (panel < -1) {
    if (skiploop > 1) {
      skiploop = 0;
      if (phase == 1) {
        hero.x = 401;
        hero.y = floor_1.y + -100;
      }
      if (phase == 2) {
        hero.x = -1;
        hero.y = floor_1.y + -100;
      }
    }
  }
  
  
  
  
  
  if (panel == 612) {
    if (hero.x < 5) {
      hero.x = 10;
    }
  }
  if (anvil_1.y > 600 ) {
    stopSound("assets/category_background/fantasy.mp3");
    credits = credits + 1;
    hero.x = 100;
    hero.y = 280;
    hero.setAnimation("hero_idle_right");
    fluff.x = 200;
    fluff.y = 280;
    fluff.setAnimation("fluff_1");
    floor_create(300, 300, 300, 300, 300, 300, 300);
    platforms_create(-200, -200, -200, -200, -200, -200, -200);
    king_1_huge.x = -1000;
    king_1_huge.y = -1000;
    switch_1.x = -50;
    switch_1.y = -260;
    hero_control = false;
    if (credits > 30) {
      stroke("grey");
      textSize(20);
      text("Game complete!", 200, 125);
    }
    if (credits > 90) {
      stroke("yellow");
      textSize(20);
      text("coins collected; " + coins, 100, 175);
    }
    if (credits > 120) {
      stroke("red");
      textSize(20);
      text("levels skipped; " + skips, 100, 200);
    }
    if (credits > 150) {
      stroke("green");
      textSize(20);
      text("game open for; "  + World.seconds +" seconds", 100, 225);
    }
  }
  if (lava_create == 1) {
    if (lava_rise < 50) {
      lava_1.velocityY = -2;
    }
    if (lava_rise > 50) {
      lava_1.velocityY = 2;
    }
    if (lava_rise > 100) {
      lava_rise = 0;
    }
  }
  
  if (hero.y > 400) {
    black_1.setAnimation("buffer");
    black_1.setAnimation("screen_black_1");
    stopSound("assets/boss_loop_1.mp3");
  }
  if (hero.y > 500) {
    coins = 0;
    power = "none";
    hero_control = true;
    hero_platforms = true;
    enemy_1.velocityX = 0;
    enemy_2.velocityX = 0;
    hero.velocityX = 0;
    hero.velocityY = 0;
    if (phase == 1) {
      hero.x = 10;
    }
    if (phase == 2) {
      hero.x = 385;
    }
    hero.y = floor_1.y + -20;
    hero.setAnimation("hero_idle_right");
    create_panel();
    playSound("assets/category_music/negative_game_fail_1.mp3", false);
  }
  //cut 1
  if (cut_1 == 0) {
    enemy_gang.velocityX = -5;
    if (enemy_gang.x < fluff.x + -15) {
      hero_control = false;
      cut_1 = 1;
    }
  }
  if (cut_1 == 1) {
    enemy_gang.velocityX = 5;
    enemy_gang.setAnimation("enemy_gang_2");
    fluff.x = -200;
    fluff.y = -200;
    if (enemy_gang.x > 300) {
      hero.setAnimation("hero_walking_right");
      hero.velocityX = 4.75;
      cut_1 = 2;
    }
  }
  //cut2
  if (cut_2 == 1) {
      cut_2 = 2;
    
  }
  if (cut_2 == 2) {
    fluff.velocityY = -2;
      cut_2 = 3;
    
  }
  if (cut_2 == 3) {
    hero.x = 50;
    hero.y = 300;
    king_1.x = 200;
    king_1.y = 250;
    tower_1.x = 300;
    tower_1.y = -400;
    if (fluff.isTouching(tower_1)) {
      cut_2 = 4;
    }
  }
  if (cut_2 == 4) {
    king_1.setAnimation("king_2_power");
    king_1.scale = king_1.scale + 0.02;
    king_1.y = king_1.y - 0.9;
    arrow_1.x = 50;
    arrow_1.y = 200;
    arrow_1.setAnimation("arrow_2");
     
    
    
  }
  //cut 3 (final boss scene)
  if (king_1_huge.x > 350) {
    switch_1.setAnimation("switch_1_pressed");
  } else {
    if (switch_used == false) {
      switch_1.setAnimation("switch_1");
      if (hero.y < switch_1.y - 10) {
        switch_used = true;
      }
    } else {
      switch_1.setAnimation("switch_1_pressed");
    }
  }
  if (switch_used == true) {
   anvil_1.x = king_1_huge.x;
   king_1_huge.velocityX = 0;
   anvil_1.velocityY = anvil_1.velocityY + 1;
  }
  if (anvil_1.isTouching(king_1_huge)) {
    king_1_huge.setAnimation("king_1_huge_hurt");
    king_1_huge.velocityY = 5;
  }
  
  
  
  if (phase == 1) {
    if (hero.x > 400) {
      hero.x = 0;
      total_coins = total_coins + coins;
      coins = 0;
      panel = panel + 1;
      enemy_1.velocityX = 0;
      enemy_2.velocityX = 0;
      reset_all();
      create_panel();
    }
  }
  if (phase == 2) {
    if (hero.x < 0) {
      hero.x = 400;
      total_coins = total_coins + coins;
      coins = 0;
      panel = panel + 1;
      enemy_1.velocityX = 0;
      enemy_2.velocityX = 0;
      reset_all();
      create_panel();
    }
  }
 
  if (hero_control == true) {
    //progression
    if (hero.velocityX > 6.5) {
      hero.velocityX = 6.5;
    }
    if (hero.velocityX < -6.5) {
      hero.velocityX = -6.5;
    }
    if (keyDown("right")) {
    dirrection = "right";
    if (keyDown("space")) {
      hero.velocityX = hero.velocityX + 0.5;
    } else {
      hero.velocityX = 3;
    }
    if (power == "fire") {
      hero.setAnimation("hero_walking_right_fire");
    } else if (power == "leaf") {
      hero.setAnimation("hero_walking_right_leaf");
    } else if (power == "cold") {
      hero.setAnimation("hero_walking_right_cold");
    } else {
      hero.setAnimation("hero_walking_right");
    }
      } else {
      if (hero.velocityX < 0) {
        if (power == "cold") {
          hero.velocityX = hero.velocityX + 0.25;
        }
        if (theme == "ice") {
          hero.velocityX = hero.velocityX + 0.05;
        } else {
          hero.velocityX = hero.velocityX + 0.3;
        }
      }
    }
    if (keyDown("left")) {
    dirrection = "left";
    if (keyDown("space")) {
      hero.velocityX = hero.velocityX + -0.5;
    } else {
      hero.velocityX = -3;
    }
    if (power == "fire") {
      hero.setAnimation("hero_walking_left_fire");
    } else if (power == "leaf") {
      hero.setAnimation("hero_walking_left_leaf");
    } else if (power == "cold") {
      hero.setAnimation("hero_walking_left_cold");
    } else {
      hero.setAnimation("hero_walking_left");
    }
      } else {
      if (0 < hero.velocityX) {
        if (power == "cold") {
          hero.velocityX = hero.velocityX + -0.25;
          
        }
        if (theme == "ice") {
          hero.velocityX = hero.velocityX - 0.05;
        } else {
          hero.velocityX = hero.velocityX - 0.3;
        }
      }
    }
    //dashing
    
  if (keyDown("up")) {
      if (can_jump == true && touching_ground == true) {
        hero.velocityY = -12;
        can_jump = false;
        stop_jump = true;
        if (jump_sound_timer > 15) {
          jump_sound_timer = 0;
          playSound("assets/category_jump/ninja_jump_2.mp3", false);
        }
      }
  }
    if (power == "leaf") {
      if (keyWentDown("up") && can_jump == false) {
        if (double_jump_timer > 30) {
          double_jump_timer = 0;
          hero.velocityY = -10;
        }
      }
    }
    if (keyWentUp("up")) {
      if (stop_jump == true) {
        if (hero.velocityY < 0) {
          hero.velocityY = 0;
        }
        stop_jump = false;
      }
    }
    if (hero.velocityY < -3) {
    if (dirrection == "right") {
      if (power == "fire") {
        hero.setAnimation("hero_jumping_right_fire");
      } else if (power == "leaf") {
        hero.setAnimation("hero_jumping_right_leaf");
      } else if (power == "cold") {
        hero.setAnimation("hero_jumping_right_cold");
      } else {
        hero.setAnimation("hero_jumping_right");
      }
    } else if (dirrection == "left") {
      if (power == "fire") {
        hero.setAnimation("hero_jumping_left_fire");
      } else if (power == "leaf") {
        hero.setAnimation("hero_jumping_left_leaf");
      } else if (power == "cold") {
        hero.setAnimation("hero_jumping_left_cold");
      } else {
        hero.setAnimation("hero_jumping_left");
      }
    }
      }
  if (keyWentUp("left")) {
    if (dirrection == "right") {
      if (power == "fire") {
        hero.setAnimation("hero_idle_right_fire");
      } else if (power == "leaf") {
        hero.setAnimation("hero_idle_right_leaf");
      } else if (power == "cold") {
        hero.setAnimation("hero_idle_right_cold");
      } else {
        hero.setAnimation("hero_idle_right");
      }
    } else if (dirrection == "left") {
      if (power == "fire") {
        hero.setAnimation("hero_idle_left_fire");
      } else if (power == "leaf") {
        hero.setAnimation("hero_idle_left_leaf");
      } else if (power == "cold") {
        hero.setAnimation("hero_idle_left_cold");
      } else {
        hero.setAnimation("hero_idle_left");
      }
    }
  }
  if (keyWentUp("right")) {
    if (dirrection == "right") {
      if (power == "fire") {
        hero.setAnimation("hero_idle_right_fire");
      } else if (power == "leaf") {
        hero.setAnimation("hero_idle_right_leaf");
      } else if (power == "cold") {
        hero.setAnimation("hero_idle_right_cold");
      } else {
        hero.setAnimation("hero_idle_right");
      }
    } else if (dirrection == "left") {
      if (power == "none") {
        hero.setAnimation("hero_idle_left_fire");
      } else if (power == "leaf") {
        hero.setAnimation("hero_idle_left_leaf");
      } else if (power == "cold") {
        hero.setAnimation("hero_idle_left");
      } else {
        hero.setAnimation("hero_idle_left");
      }
    }
  }
    if (keyWentDown("space")) {
      if (power == "fire") {
        if (fireball_1.y > 425) {
          playSound("assets/category_jump/jump_7.mp3", false);
          fireball_1.x = hero.x;
          fireball_1.y = hero.y;
          fireball_1.velocityY = -10;
          if (dirrection == "right") {
            fireball_1.velocityX = 3;
          } else {
            fireball_1.velocityX = -3;
          }
        }
      }
      if (power == "cold") {
        if (iceball_1.y > 425) {
          playSound("assets/category_jump/jump_7.mp3", false);
          iceball_1.x = hero.x;
          iceball_1.y = hero.y;
          iceball_1.velocityY = -10;
          if (dirrection == "right") {
            iceball_1.velocityX = 3;
          } else {
            iceball_1.velocityX = -3;
          }
        }
      }
    }
  }
  //ground mechanics
  //check for ground
  if (hero_platforms == true) {
    
    if (hero.isTouching(lava_1)) {
      game_over();
    }
    if (hero.isTouching(king_1)) {
      game_over();
    }
    if (hero.isTouching(king_1_huge)) {
      game_over();
    }
  
  if (hero.velocityY < 3) {
    touching_ground = true;
  } else {
    touching_ground = false;
  }
  //ground effects on hero
  //start
  if (hero.isTouching(floor_1)) {
     hero.velocityY = 0;
    can_jump = true;
     touching_ground = true;
    hero.y = hero.y + -1;

  }
  ground_1.displace(hero);
  //end
  //start
  if (hero.isTouching(floor_2)) {
     hero.velocityY = 0;
      can_jump = true;
     touching_ground = true;
      hero.y = hero.y + -1;

  }
  ground_2.displace(hero);
  //end
  //start
  if (hero.isTouching(floor_3)) {
     hero.velocityY = 0;
      can_jump = true;
     touching_ground = true;
      hero.y = hero.y + -1;

  }
  ground_3.displace(hero);
  //end
    //start
      if (hero.isTouching(floor_4)) {
     hero.velocityY = 0;
      can_jump = true;
     touching_ground = true;
      hero.y = hero.y + -1;

      }
      ground_4.displace(hero);
      //end
    //start
      if (hero.isTouching(floor_5)) {
     hero.velocityY = 0;
      can_jump = true;
     touching_ground = true;
      hero.y = hero.y + -1;

      }
      ground_5.displace(hero);
      //end
    //start
      if (hero.isTouching(floor_6)) {
     hero.velocityY = 0;
      can_jump = true;
     touching_ground = true;
      hero.y = hero.y + -1;

      }
      ground_6.displace(hero);
      //end
    //start
      if (hero.isTouching(floor_7)) {
     hero.velocityY = 0;
      can_jump = true;
     touching_ground = true;
      hero.y = hero.y + -1;

      }
      ground_7.displace(hero);
      //end
    //start
      if (hero.isTouching(block_platform_1)) {
     hero.velocityY = 0;
      can_jump = true;
     touching_ground = true;
      hero.y = hero.y + -1;

      }
      
      //end
    //start
      if (hero.isTouching(rotating_platform_1)) {
     hero.velocityY = 0;
      can_jump = true;
     touching_ground = true;
      hero.y = hero.y + -1;
      }
      hero.collide(rotating_platform_1);
      
      if (hero.isTouching(rotating_platform_2)) {
     hero.velocityY = 0;
      can_jump = true;
     touching_ground = true;
      hero.y = hero.y + -1;
     hero.velocityX = hero.velocityX + -1;
      }
       hero.collide(rotating_platform_2);
      
      
       if (hero.isTouching(rotating_platform_3)) {
     hero.velocityY = 0;
      can_jump = true;
     touching_ground = true;
      hero.y = hero.y + -1;
     hero.velocityX = hero.velocityX + -1;
      }
       hero.collide(rotating_platform_3);
    if (hero.isTouching(wheel_1)) {
     hero.velocityY = 0;
      can_jump = true;
     touching_ground = true;
      hero.y = hero.y + -1;
     hero.velocityX = hero.velocityX + -2;
      }
       hero.collide(wheel_1);
       
    if (hero.isTouching(wheel_2)) {
     hero.velocityY = 0;
      can_jump = true;
     touching_ground = true;
      hero.y = hero.y + -1;
     hero.velocityX = hero.velocityX + -2;
      }
       hero.collide(wheel_2);
      
      rotating_platform_1.displace(hero);
      //end
    //platforms
    //start
    hero;if (hero.isTouching(platform_1) && hero.y < platform_1.y + -11) {
     hero.velocityY = 0;
      can_jump = true;
     touching_ground = true;
      hero.y = hero.y + -1;

      }
      //end
    //start
    hero;if (hero.isTouching(platform_2) && hero.y < platform_2.y + -11) {
     hero.velocityY = 0;
      can_jump = true;
     touching_ground = true;
      hero.y = hero.y + -1;

      }
      //end
    //start
    hero;if (hero.isTouching(platform_3) && hero.y < platform_3.y + -11) {
     hero.velocityY = 0;
      can_jump = true;
     touching_ground = true;
      hero.y = hero.y + -1;

      }
      //end
    //start
    hero;if (hero.isTouching(platform_4) && hero.y < platform_4.y + -11) {
     hero.velocityY = 0;
      can_jump = true;
     touching_ground = true;
      hero.y = hero.y + -1;

      }
      //end
    //start
    hero;if (hero.isTouching(platform_5) && hero.y < platform_5.y + -11) {
     hero.velocityY = 0;
      can_jump = true;
     touching_ground = true;
      hero.y = hero.y + -1;

      }
      //end
    //start
    hero;if (hero.isTouching(platform_6) && hero.y < platform_6.y + -11) {
     hero.velocityY = 0;
      can_jump = true;
     touching_ground = true;
      hero.y = hero.y + -1;

      }
      //end
    //start
    hero;if (hero.isTouching(platform_7) && hero.y < platform_7.y + -11) {
     hero.velocityY = 0;
      can_jump = true;
     touching_ground = true;
      hero.y = hero.y + -1;

      }
      //end
    //spring
    if (hero.isTouching(spring_1)) {
      playSound("assets/category_accent/puzzle_game_accent_boing_02.mp3", false);
      hero.velocityY = hero.velocityY + -2.5;
      can_jump = false;
      spring_1.setAnimation("spring_2");
    } else {
      spring_1.setAnimation("spring_1");
    }
    //enemys
    //start
    if (fireball_1.isTouching(enemy_1)) {
      playSound("assets/category_explosion/retro_game_enemy_shot_5.mp3", false);
      enemy_1.x = -1000;
    }
    if (iceball_1.isTouching(enemy_1)) {
      playSound("assets/category_hits/vibrant_game_frozen_break_hit_1.mp3", false);
      enemy_1.setAnimation("enemy_frozen_1");
      enemy_1.x = -1000;
    
      
    }
    if (iceball_1.isTouching(enemy_2)) {
      playSound("assets/category_hits/vibrant_game_frozen_break_hit_1.mp3", false);
      enemy_2.setAnimation("enemy_frozen_1");
      enemy_2.x = -1000;
    }
    if (hero.isTouching(enemy_1)) {
      if (hero.y < enemy_1.y + 0) {
        playSound("assets/category_explosion/retro_game_enemy_shot_5.mp3", false);
        enemy_dead_1.setAnimation("buffer");
        enemy_dead_1.setAnimation("enemy_dead_1");
        enemy_dead_1.x = enemy_1.x;
        enemy_dead_1.y = enemy_1.y;
        enemy_1.x = -1000;
        hero.velocityY = hero.velocityY + -17;
      }
      if (hero.y > enemy_1.y + -20) {
        game_over();
      }
    }
    if (theme == "mushroom") {
      enemy_1.setAnimation("enemy_wings_1");
      enemy_1.velocityY = 0;
    } else {
      enemy_1.setAnimation("enemy_walking_1");
      enemy_1.velocityY = enemy_1.velocityY + 1;
    }
     enemy_1.velocityX = -1.5;
    //start
    if (fireball_1.isTouching(enemy_2)) {
      playSound("assets/category_explosion/retro_game_enemy_shot_5.mp3", false);
      enemy_2.x = -1000;
    }
    if (hero.isTouching(enemy_2)) {
      if (hero.y < enemy_2.y + 0) {
        playSound("assets/category_explosion/retro_game_enemy_shot_5.mp3", false);
        enemy_dead_1.setAnimation("buffer");
        enemy_dead_1.setAnimation("enemy_dead_1");
        enemy_dead_1.x = enemy_2.x;
        enemy_dead_1.y = enemy_2.y;
        enemy_2.x = -1000;
        hero.velocityY = hero.velocityY + -17;
      }
      if (hero.y > enemy_2.y + -20) {
        game_over();
      }
    }
     enemy_2.velocityX = -1.5;
    if (theme == "mushroom") {
      enemy_2.setAnimation("enemy_wings_1");
      enemy_2.velocityY = 0;
    } else {
      enemy_2.setAnimation("enemy_walking_1");
      enemy_2.velocityY = enemy_2.velocityY + 1;
    }
    //start
    enemy_1.collide(floor_1);
    enemy_1.collide(floor_2);
    enemy_1.collide(floor_3);
    enemy_1.collide(floor_4);
    enemy_1.collide(floor_5);
    enemy_1.collide(floor_6);
    enemy_1.collide(floor_7);
    enemy_2.collide(floor_1);
    enemy_2.collide(floor_2);
    enemy_2.collide(floor_3);
    enemy_2.collide(floor_4);
    enemy_2.collide(floor_5);
    enemy_2.collide(floor_6);
    enemy_2.collide(floor_7);
    //end
    hero.collide(floor_1);
    hero.collide(floor_2);
    hero.collide(floor_3);
    hero.collide(floor_4);
    hero.collide(floor_5);
    hero.collide(floor_6);
    hero.collide(floor_7);
    //power ups and ? block
    //? block
    //start
    if (hero.isTouching(block_1) && (block_1_used == false && hero.y > block_1.y + 20)){
      playSound("assets/category_hits/8bit_splat.mp3", false);
      block_1.setAnimation("block_?_2");
      block_1_used = true;
      fire_power.x = block_1.x + 0;
      fire_power.y = block_1.y + -30;
    }
    hero.collide(block_1);
    //end
    //fire
    //start
    if (item_power == "fire") {
      fire_power.setAnimation("fire_power");
      if (hero.isTouching(fire_power)) {
        playSound("assets/category_points/vibrant_game_cartoon_musical_bling_1.mp3", false);
        power = "fire";
        fire_power.x = -1000;
      }
    } else if (item_power == "leaf") {
      fire_power.setAnimation("leaf_power");
      if (hero.isTouching(fire_power)) {
        playSound("assets/category_points/vibrant_game_cartoon_musical_bling_1.mp3", false);
        power = "leaf";
        fire_power.x = -1000;
      }
    } else if (item_power == "cold") {
      fire_power.setAnimation("cold_power");
      if (hero.isTouching(fire_power)) {
        playSound("assets/category_points/vibrant_game_cartoon_musical_bling_1.mp3", false);
        power = "cold";
        fire_power.x = -1000;
      }
    }
    //end
    //fireball
    fireball_1.velocityY = fireball_1.velocityY + 1;
    iceball_1.velocityY = iceball_1.velocityY + 1;
    //coins
    //start
    if (hero.isTouching(coin_1)) {
      coin_1.x = -200;
      coin_1.y = -200;
      coins = coins + 1;
      playSound("assets/category_collect/retro_game_coin_pickup_13.mp3", false);
    }
    //end
    //start
    if (hero.isTouching(coin_2)) {
      coin_2.x = -200;
      coin_2.y = -200;
      coins = coins + 1;
      playSound("assets/category_collect/retro_game_coin_pickup_13.mp3", false);
    }
    //end
    //start
    if (hero.isTouching(coin_3)) {
      coin_3.x = -200;
      coin_3.y = -200;
      coins = coins + 1;
      playSound("assets/category_collect/retro_game_coin_pickup_13.mp3", false);
    }
    //end
    //boss fight 1
    if (boss_fight_1 == true) {
      if (hero.x > 385) {
        hero.x = 385;
      }
      if (boss_health == 0) {
        boss_1.velocityY = 10;
        boss_fight_1 = false;
        arrow_1.x = 300;
        arrow_1.y = 200;
      } else {
        boss_1.velocityY = 0;
      }
      if (boss_dammaged_timer > 60) {
        if (world == 1) {
          boss_1.setAnimation("boss_1");
        } else if (world == 2) {
          boss_1.setAnimation("boss_2");
        } else if (world == 3) {
          boss_1.setAnimation("boss_1");
        } else if (world == 5) {
          boss_1.setAnimation("king_1");
        } else {
          boss_1.setAnimation("boss_1");
        }
        if (boss_1.x > hero.x) {
          boss_1.velocityX = boss_1.velocityX + -0.3;
        } else {
          boss_1.velocityX = boss_1.velocityX + 0.3;
        }
        if (boss_1.x < 0) {
          if (boss_health == 3) {
            boss_1.velocityX = 2;
          } else if (boss_health == 2) {
            boss_1.velocityX = 2.5;
          } else {
            boss_1.velocityX = 3;
          }
        } else if (boss_1.x > 400) {
          if (boss_health == 3) {
            boss_1.velocityX = -2;
          } else if (boss_health == 2) {
            boss_1.velocityX = -2.5;
          } else {
            boss_1.velocityX = -6;
          }
        }
        if (hero.isTouching(boss_1) && hero.y < boss_1.y + -30) {
          playSound("assets/category_explosion/vibrant_deep_wet_explosion.mp3", false);
          boss_dammaged_timer = 0;
          boss_health = boss_health - 1;
          hero.velocityY = -16;
          if (dirrection == "right") {
            hero.velocityX = hero.velocityX + 10;
          } else if (dirrection == "left") {
            hero.velocityX = hero.velocityX + -10;
          }
        } else if ((hero.isTouching(boss_1) && hero.y > boss_1.y + -30)) {
          game_over();
        }
      } else {
        if (world == 5) {
          boss_1.setAnimation("king_1_hurt");
        } else {
          boss_1.setAnimation("boss_1_hurt");
        }
        boss_1.velocityX = 0;
      }
    }
  }
  //platform alinement
  ground_1.x = floor_1.x + 0;
  ground_1.y = floor_1.y + 105;
  ground_2.x = floor_2.x + 0;
  ground_2.y = floor_2.y + 105;
  ground_3.x = floor_3.x + 0;
  ground_3.y = floor_3.y + 105;
  ground_4.x = floor_4.x + 0;
  ground_4.y = floor_4.y + 105;
  ground_5.x = floor_5.x + 0;
  ground_5.y = floor_5.y + 105;
  ground_6.x = floor_6.x + 0;
  ground_6.y = floor_6.y + 105;
  ground_7.x = floor_7.x + 0;
  ground_7.y = floor_7.y + 105;
  block_platform_1.x = block_1.x + 0;
  block_platform_1.y = block_1.y + -15;
  drawSprites();
} 





// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
