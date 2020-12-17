<template lang="pug">
.work
  .work_tab_block
    .work_tab
      .work_tab_text(v-for="(item, i) in work_list" @click="to_exhibition(i)" :class="{select_A: (Number($route.query.place_number) === 1 || work_place === 1)&& Math.ceil(Number(i) + 1) === 1 , select_B: (Number($route.query.place_number) === 2 || work_place === 2) && Math.ceil(Number(i) + 1) === 2, select_C: (Number($route.query.place_number) === 3 || work_place === 3) && Math.ceil(Number(i) + 1) === 3, select_D: (Number($route.query.place_number) === 4 || work_place === 4) && Math.ceil(Number(i) + 1) === 4}") {{ item.place }}
    .work_place_title {{ work_list[Math.ceil(Number(work_place) - 1)].title }}
    .work_place_description {{ work_list[Math.ceil(Number(work_place) - 1)].description }}
    .work_place_authors_title(v-if="Number($route.query.place_number) != 4") 藝術家
    .work_place_authors_block(v-if="place_authors && Number($route.query.place_number) !== 4")
      .work_place_authors(v-for="(item, i) in place_authors") {{ item }}
        .line(v-if="Number(i+1) !== place_authors.length") /
    .dm_arts(v-if="Number($route.query.place_number) === 4")
      .top
    .work_text_block#work(v-if="Math.ceil(Number(work_place) - 1) != 2")
      .work_block_for_height
        .work_tab_works(v-for="(w, j) in work_list[Math.ceil(Number(work_place) - 1)].work" @click="to_work(j)" :class="{select: Number(work_number) === Math.ceil(Number(j) + 1) && Number(work_place) !== 3}") {{ w.name }}
    .dm(v-if="Math.ceil(Number(work_place) - 1) === 2")
      .top
  .work_slide(v-if="Math.ceil(Number(work_place) - 1) != 2")
    .work_slide_pic_block
      transition-group(name="fade" mode="in-out")
        .work_slide_pic(v-for="(w, i) in work_list[Math.ceil(Number(work_place) - 1)].work.slice(Math.ceil(Number(work_number)-1), Number(work_number))" :key="(w.name + pic_number)" :style="{background: 'url(' + w.pic[pic_number] + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
    .work_slide_prev
    .work_slide_next
    .work_slide_other_pic(v-for="(w, i) in work_list[Math.ceil(Number(work_place) - 1)].work.slice(Math.ceil(Number(work_number)-1), Number(work_number))" :key="i")
      .pic(v-for="(p, j) in w.pic" :key="p" @click="pic_number = j" :style="{background: 'url(' + p + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
    .work_content_block
      .work_title(v-for="(w, i) in work_list[Math.ceil(Number(work_place) - 1)].work.slice(Math.ceil(Number(work_number)-1), Number(work_number))" :key="w.name + w.name") {{ w.name }}
        .work_content(v-if="w.description") {{ w.description }}
        .work_content(v-if="w.description_html" v-html="w.description_html")
        .work_content.en(v-if="w.description_en_html" v-html="w.description_en_html")
        .work_content.en(v-if="w.description_en") {{ w.description_en }}
        .work_author_title 作者
        .work_author_block
          .profile(v-for="au in w.authors" :class="{work_place_four: work_place === 4}")
            .picBlock(:class="{work_place_four_2: work_place === 4}")
              .work_author_pic(v-if="au.author_pic" :style="{background: 'url(' + au.author_pic + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}" :class="{fbi: au.author === 'FBI Lab', move: work_number === 6 && work_place === 2}")
              .work_author_name(:class="{work_place_four_3: work_place === 4}") {{ au.author }}
            .description(v-if="work_place !== 4")
              .description_text(v-if="au.author_introduction_html" v-html="au.author_introduction_html")
              .description_text(v-if="au.author_introduction") {{ au.author_introduction }}
              .description_text.en(v-if="au.author_introduction_en") {{ au.author_introduction_en }}
              .description_text.en(v-if="au.author_introduction_en_html" v-html="au.author_introduction_en_html")
  teach_animate(v-if="Math.ceil(Number(work_place) - 1) === 2")






</template>

<script>
import teach_animate from '@/components/teach_animate'
export default {
  props: {
    // now_place: {
      // type: Number
    // }
  },
  components: {
    teach_animate
  },
  data() {
    return {
      work_place: this.$route.query.place_number || 1,
      pic_number: 0,
      work_number: this.$route.query.work_number || 1,
      work_list: [
        {
          place: '戶外動力科學藝術區',
          title: '鴿子廣場「戶外動力藝術區」(執行策展：劉士達)',
          description: '綜二館後方的鴿子廣場，主要是以數學與物理呈現的立體雕塑作品，如一面到底的莫比斯環、水漩渦旋轉舞、直紋曲面幾何之美、遛溜水車某等4件作品，不管白晝與夜這四君子均獻演，不畏九降風屹立陳展。',
          authors: [
            {
              name: '',
              description: '',
              pic: '',
            }
          ],
          work: [
            {
              name: '一面到底的莫比斯環 / Möbius Strip',
              authors: [
                {
                  author: 'FBI Lab',
                  author_introduction: '',
                  author_introduction_en: '',
                  author_pic: require('../assets/fbilab_logo.png'),
                }
              ],
              description: '作品是一個立體雕塑造型裝置，參與者藉由欣賞、觸摸以及實際與作品互動的方式了解Möbius Strip背後的Topology數學原理。',
              description_en: 'This artwork is a sculpture installation. Participants can understand the mathematical principles and Topology behind the Möbius Strip through appreciation, touch, and interaction with the artwork.',
              pic: [
                require('../assets/works/mo/mo_01.jpg')
              ]
            },
            {
              name: '水漩渦旋轉舞 / Dancing Water Vortex',
              authors: [
                {
                  author: 'FBI Lab',
                  author_introduction: '',
                  author_introduction_en: '',
                  author_pic: require('../assets/fbilab_logo.png'),
                }
              ],
              description: '「跳舞的水漩渦」是一組在多個圓柱體水管中產生水渦流現象的作品，透過渦流產生，以及水位的高起伏變化，在夜間的LED照明燈光秀，形成一個會跳舞的水漩渦互動表演裝置。',
              description_en: 'This is a group of artworks that produce water vortex phenomena in multiple cylindrical water pipes. Through the vortex generation and the high ups and downs of the water level, in the night, the LED lighting show will create a dancing water vortex interaction.',
              pic: [
                require('../assets/works/water/water_01.jpg')
              ]
            },
            {
              name: '直紋曲面幾何之美 / Flower Illumination Forest',
              authors: [
                {
                  author: 'FBI Lab',
                  author_introduction: '',
                  author_introduction_en: '',
                  author_pic: require('../assets/fbilab_logo.png'),
                }
              ],
              description: '藉由智慧型路燈收集清華大學校園內的氣候數據進行記錄，並結合物聯網技術與造型藝術裝置整合的科技藝術作品，作品本身具備溫度、濕度、風速的感測數據透過光線變化呈現。',
              description_en: 'This IoT installation art combines the the climate data gathered by the smart street lamp and screening data in Tsing Hua campus.   It will have different light pattern based on the data of wind, rain, temperature, light.',
              pic: [
                require('../assets/works/flower/flower_01.jpg'),
                require('../assets/works/flower/flower_02.jpg'),
                require('../assets/works/flower/flower_03.jpg'),
              ]
            },
            {
              name: '遛溜水車某 / The Writing Lady',
              authors: [
                {
                  author: 'FBI Lab',
                  author_introduction: '',
                  author_introduction_en: '',
                  author_pic: require('../assets/fbilab_logo.png'),
                }
              ],
              description: '「水車某」是個善解人意的女孩子，她將輸入的文字、數字或圖像解析為像素點的排列組合，並在出門散步時將這些重要的、有趣的、平常說不出口的訊息噴印在地面上，傳遞給大眾。',
              description_en: 'She is a considerate girl. She parses the input text, numbers or images into a combination of 8x8 pixels. When she goes out for a walk, she prints these important, interesting, and usually unspeakable messages on the ground and delivers to the public.',
              pic: [
                require('../assets/works/car/car_01.jpg'),
                // require('../assets/works/car/car_02.jpg'),
                // require('../assets/works/car/car_03.jpg')
              ]
            },
          ]
        },
        {
          place: '互動科學藝術區',
          title: '旺宏館「互動科學藝術區」(執行策展：孟昕、孫佳興)',
          description: '圖書館內輕學區，在佐柔和的燈光與清新的空調中，展現10件運用物理、化學、數學、科技與藝術融合並轉化的互動藝術作品。這區的互動裝置將與您的肢體與心神會有深度交流，絕對讓您駐足許久欲罷不能。',
          authors: [
            {
              name: '',
              description: '',
              pic: ''
            }
          ],
          work: [
            {
              name: '伏流 / The Shape of Floating',
              authors: [
                {
                  author: '張敬舜',
                  author_introduction: '個人創作以日常生活自身經驗為出發，研究泡泡媒材特性與物質想象，尋找創造性表現手法，嘗試在不同形式與空間場域中，透過電子電路、機械動力裝置與媒材之間互相連結，探索裝置、科技、物質、空間與自身關係。',
                  author_introduction_en: "Personal creation is based on daily experience, researching the characteristics of bubble media and material imagination,looking for creative expression methods, trying to explore the relationship between installation, technology, matter,space and itself in different forms and spatial fields through electronic circuits, mechanical devices and media.",
                  author_pic: require('../assets/works/float/float_author.jpg'),
                }
              ],
              description: '作品嘗試於真實空間中以物理的方式創造出有如數位軟體中粒子系統特效，將每一顆泡泡視為一個單位，控制其生成大小、速度、方向，以多顆泡泡型塑出浮動的流體雕塑，是初生、蔓延、堆疊、湧現、墜落、消逝、死亡，同時併發的當下。藉由泡泡的介入空間之中進行擾亂及重新組構，在虛與實交織的身體感知中，建構出如夢幻泡影維度中一幀。',
              description_en: "His work attempts to physically create special effects like particle systems in digital software in real space.It treats each bubble as a unit, controls its generation size, speed, direction, and creates fluid sculpture with multiple bubbles.It is the birth, spread, stack, emerge, fall, disappear, death, and concurrent present. By disturbing and restructuring in the bubble's intervention space, a frame in the dimension of fantasy bubbles is constructed in the physical perception of virtual and reality.",
              pic: [
                require('../assets/works/float/float01.jpg'),
                require('../assets/works/float/float02.jpg'),
                require('../assets/works/float/float03.jpg'),
                require('../assets/works/float/float04.jpg'),
                require('../assets/works/float/float05.jpg'),
              ]
            },
            {
              name: 'Line',
              authors: [
                {
                  author: 'Katsumoto Yuichiro',
                  author_introduction: '',
                  author_introduction_en: 'KATSUMOTO Yuichiro is an artist of gadget making and an educator. He is strongly interested in "Utsuroi" that means "passage","transition", "moving", and "morphing" in Japanese. By interpreting Utsuroi, he keeps inventing playful things since his student days. He studied a video production and an interaction design at Keio University SFC. After getting PhD, he moved to Singapore and worked at National University of Singapore for eight years. In October 2018, he came back to Japan and started his own studio "katsumotoy". In April 2019, he also started teaching at Tokyo Denki University School of Science and Engineering.',
                  author_pic: require('../assets/works/line/line_author.jpeg'),
                }
              ],
              description: '人類使用字母(二維符號)進行交流已有數千年歷史，撰寫字母不僅需要透過重複書寫方式來鍛鍊，更需要長時間的累積。基於這個概念，利用機器人的運動軌跡與時間作為顯示字母的圖像，稱為Robotype。作品「Line」用利用折線圖像與機器人的運動，讓摺疊線條以表達單字的意義。',
              description_en: 'Humans invented words to communicate with each other and letters to record these words. Owing to letters, humans were able to communicate beyond the present into the future. The durability of paper is substantially longer than a human life span, and thus, letters written on paper can be retained almost indefinitely. Although the written letters themselves do not move, humans require moving their body and spending time to create them.The movement and time spent by the writer usually appears in the brush or pen stroke of the letter. The shading, blurring, and density of ink demonstrates the behavior and movement of the writer over time, from the emotion or thought of the writer can be deduced. Thus, our lettersare not only two-dimensional symbols that convey messages but also involve the time and movements that humans devote toward communication.The time and movement observed in handwriting has not been regarded as important for letterpress printing and computer monitors that have appeared more recently. However, could it be possible to obtain a display technology for letters that co-exists with time and movement beyond the two-dimensional plane? With the development of such a technology, we could determine implications beyond those of the words themselves. Based on this notion, I conducted studies named Robotype regarding multidimensional kinetic typography, primarily using robots to display a letter and visualize its time and movement simultaneously. This work "Line" is the latest Robotype, and display words like a line graph by folding a rope. It consists of eight robot arms and one nylon strings.',
              pic: [
                require('../assets/works/line/line01.jpeg'),
                require('../assets/works/line/line02.jpeg'),
              ]
            },
            {
              name: 'Z Machine',
              authors: [
                {
                  author: '趙暐辰',
                  author_introduction_html: '<p>趙暐辰 -- 蒸氣試驗所所長</p><p>暐辰是機械與手工的愛好者，是誤入歧途的設計師與教育工作者。雖然從來沒有上過一堂機械課，可是常常喜歡用機械原理來解決問題。</p><p>平時的工作是和青少年在工房裡敲敲打打，研究工程科學、商品設計、木工和遙控飛機，並且隨意製作各種有趣但不一定有實質意義的器物，像是廚具做成的壁燈、只能切斷地瓜和香蕉的剁菜機、跑很快但是不怎麼安全的載人車輛。暐辰和青少年在工房裡緊抓著工具和材料不想下課被暐辰的太太視為正常行為。</p>',
                  author_introduction_en_html: '<p>Chris W. Chao</p><p>Industrial designer, amateur maker (3D printing, carpentry, benchwork).Graduated from department of industrial design, Tunghai University.A young post-80 designer with a keen heart in science and DIY. Having an amateur working space at home full of various machines and materials.Specialising in engineering-oriented design, manufacturing and project management.</p><p>Role in Z Machine: Main creator, in charge of all the details, structure design, mechanic processing, pottery creation.</p>',
                  author_pic: require('../assets/works/z/z_author.jpg'),
                }
              ],
              description_en_html: '<p>Z Machine is a fully mechanical, un-plugged, no computer chips required, the world&rsquo;s first tilting Clay 3D Printer.This unique printer is powered entirely by the force of gravity with 25 kilograms of weight.The printer, driven by chains and gears, works as a geometry calculator that prints out an unlimited amount of geometric shapes.The printed clay can then be glazed and fired to become a piece of beautifully engineered art.</p><p>&nbsp;</p><p>Mechanical machines were once the force that brought humanity forward.Back in the Age of Machines, when we first gain control of the coal, the gear, and the steel, mechanical machines were built roughly but look beautiful.However, these machines of the past cease to exist. They were either made safer, covered in shells, or being replaced with computer chips.These machines that once shook the ground may one day be forgotten.The Z in Z Machine implies the end of an era. It&rsquo;s a way to commemorate the machines of the past, and to show the splendor of mechanical machines to this generation.</p>',
              description_html: '<p><strong>實體</strong></p><p>Z Machine是一場機械的演出，一個全機械的陶瓷3D印表機，不用電，不用晶片與程式碼，全憑機械動能驅動與運算的機械發明。Z Machine列印時會緩緩擠出陶漿，層層堆疊成型。透過置換不同的齒輪和機械參數設定，可以列印出千變萬化的圖形，經過燒製成為瓷器。</p><p>Z Machine 乘載了一部份Steampunk的精神。用鋼鐵，用黃銅，用齒輪鍊條與彈簧，用風和螺紋旋轉所推動的壓力，也用沾滿黑油的雙手打造。因此他是一個有生命的器物，是一個與「工匠」有著緊密關係的生命體</p><p>&nbsp;</p><p><strong>議題</strong></p><p>Z Machine的動力是19世紀科技，反思的是現代科技產品有如魔法的黑箱，因此刻意要讓作品的製作流程與機械的數學邏輯脈絡以實體的方式呈獻給21世紀的人類，讓大眾看見機械運作的美，是現代科技所無法取代的；而今天逐漸式微的「實體」，也是無法被科技取代的人類天性。</p><p>關於現代人經常被科技產品決定生活與行為，Z Machine的創造者可望拿回生活與創造的主控權，再一次讓人看見科技被人完全駕馭的一面。</p><p>&nbsp;</p><p><strong>完整性</strong></p><p>Z Machine是台巧妙的機器，是各種大大小小的瓷器，同時也是一場機械的演出。用機台與工匠的互動、發明過程的草圖、看得到層積過程的瓷器成品和機械的活動感，來向觀眾介紹一個議題，也希望觀眾的心裡能夠被投射出身在21世紀的自己，所失去的那塊天性。</p>',
              pic: [
                require('../assets/works/z/z01.jpg'),
                require('../assets/works/z/z02.jpg'),
                require('../assets/works/z/z03.jpg'),
              ]
            },
            {
              name: '幻境 / Wonderland',
              authors: [
                {
                  author: '何理互動',
                  author_introduction: '何理為台灣跨領域的裝置創作團隊，團隊成員背景跨足藝術／建築／設計／工程／機械等領域，合作對象更是來自戲劇舞蹈／建築空間／流行音樂／當代藝術等各種領域，何理關注生活中的各種驚喜，發掘想像力，透過新媒體跳脫二維視覺界線，企圖給予觀眾更多的身體經驗，在空間中建造真實的幻象，在熱帶中下一場大雪，在平靜中撒一把花叢，錯置時間和空間，仿造自然地景，擷取心靈的片刻，透過科技新生新的經驗，創作電子地景。',
                  author_introduction_en: 'Whyixd is a cross-field art installation design team from Taiwan. We have members come from art / architecture / design / engineering / mechanical fields. We collaborate with dance / architecture / pop music / modern art partners. Whyixd focus on different kinds of surprise and explore more imagination in daily life. We break the barrier of 2 dimensions world with new media, presenting more body experience to audience. We build immersive illusions, make it snow in tropical area, sprinkle a handful of petal into silent space. Displace the time and space, copy the natural scenery, capture the moments of mind, create unseen experience, build digital landscape.',
                  author_pic: require('../assets/works/wonderland/wonderland_author.jpg'),
                }
              ],
              description: 'Wonderland主要探討觀者與作品間的關係。當觀眾在觀看作品時，會有所謂的共鳴或是感觸， 往往都是因為投入了自身的情感，將自我過去的經驗與作品做了連結，而現代科技放大延展了感官的可能性， 讓人能夠透過過往的經驗輕易地模擬出一個擁有真實性的假象，因此高清的畫面遠比真實的風景來的動人、三維的畫面比真實物件更令人想觸碰，虛擬的體驗更勝真正的生活，在虛擬的世界中每個人可以輕易地重塑自己的世界觀，也許真偽在這個時代已不再重要，虛擬只是成為另一種展示真我的工具，反之也間接的使自己成為了作品的某部份；Wonderland透過真實的化學反應創造出不斷變化的有機形態，使觀者能夠藉由觀看，透過想像與作品產生連結，而這樣的關係正反射出了自己，真實的存在眼前。',
              description_en: '“Wonderland” focuses on the discussion between viewer and the work itself. When viewers watch the work, they’ll have some kind of resonance and insights because they devoted themselves into it and connect their experiences with the work itself. The modern technology magnifies and extends the possibility of the senses. It can easily simulate an illusion with realism through past experience. The high-definition picture is far more touching than the real landscape, the 3D objects is more touching than the real objects, and the virtual experience is better than real life. In the virtual world, people can easily reshape their own view. Maybe authenticity is no longer important in this era. Virtuality has become a tool for showing their true self. “Wonderland” uses light and photo-sensitive chemical liquid to create an organic form that’s uncontrollable, so the viewers are able to connect themselves with it by viewing and imagination, reflect their self, while the imagination is able to exist veritably.',
              pic: [
                require('../assets/works/wonderland/wonderland01.jpg'),
                require('../assets/works/wonderland/wonderland02.jpg'),
                require('../assets/works/wonderland/wonderland03.jpg'),
              ]
            },
            {
              name: '磁墨 / Magnetic Chinese Painting',
              authors: [
                {
                  author: '蔡東伯',
                  author_introduction: '2017年實踐媒體傳達設計系畢業 ，喜歡以各種複合媒材創作，作品時常可見跨領域的元素結合，其類型從產品設計、平面設計到多媒體設計皆有。發想自日常生活中平凡的材料與現象，轉換出充滿詩意的想像。關注新藝術領域應用的結合，並融合東方傳統與互動藝術形式。曾參與北京國際設計周-當代國際水墨設計展，杭州浙江美術館，松山菸廠-台北數位藝術節。',
                  author_introduction_en: 'Dong Bo Cai , who graduated in 2017 Department of Communication Design ,Shih Chien University, like to try the possibility of different material.In recent years, he has concentrated on exploring possibilities in traditional and modern art with an aesthetics that emphasizes both rationality and sensibility has always been a central feature to his works.He has shown work internationally at events and venues including the Digital Art Festival, International Exhibition of Modern Design on Ink Painting and Zhejiang Art Museum. ',
                  author_pic: require('../assets/works/painting/painting_author.jpg'),
                }
              ],
              description_en: 'To people,second and minute are indicators of progress, and hour and day are multipliers of life accumulation. By observing time, we tell day from night via the light and shadow outside the window or the air temperature. People are always curious and concerned about time. In terms of Eastern ink paintings, creations are incubated and finished by artists via patience, persistence, Zen spirit and accumulation of a great deal of time. Besides, time baptism even symbolizes the value of ink paintings. This work combines Eastern landscape ink art with modern time device, presenting the beauty of painting by time. Due to the hurried pace in the modern life, resulting in more physical and mental busyness and tenseness, the concept of Eastern Zen is adopted to arouse users to think about the relationship between time and men, and try to slow down our paces, to be curious about the surroundings regardless of time, and to further feel and enjoy it, to curiously experience the life, and to intangibly show the loveliness of existence.',
              description_html: '<p>水墨成為了一種精神象徵，運具有濃厚傳統特質的水墨藝術，透過科技、藝術、新媒材的結合，創作出一個現代的創新設計，磁墨想表達出時間和空間兩者所帶來的文化底蘊與時間語彙的關係，成為具有實驗與表現當代水墨畫精神的應用裝置。 從水墨畫本質為突破口，並且與當代思維產生交互作用，當水墨在其中所扮演的角色便已不再是某種帶著沈重使命的意義，而是藉此擴張了它的視野，創造出了許多原本的不可能。</p><p>以磁力為媒介，以東方禪學的概念藉由磁粉在時鐘內的變化來呈現中國水墨畫般的效果。磁粉意味著畫筆，在宣紙上作畫，而以磁粉移動速度則為作畫技巧，移動速度比較快的部分，呈現出一幅畫的底紋；居中速度視為渲染畫中細緻部分；最慢的路程則負責點綴的是畫最後的經典，將水墨的韻味和美感發揮得淋漓盡致。 搭配畫紙上的2.5D山水設計，透過下面磁鐵的分布而操控而讓此幅山水畫能有著千變萬化、有著不同的筆墨濃淡、有著像真實的山水雲湧的風貌。<br /><br /></p>',
              pic: [
                require('../assets/works/painting/painting01.jpg'),
                require('../assets/works/painting/painting02.jpg'),
                require('../assets/works/painting/painting03.jpg'),
                require('../assets/works/painting/painting04.jpg'),
                require('../assets/works/painting/painting05.jpg'),
              ]
            },
            {
              name: '漂浮燈泡 / Floating Lights',
              authors: [
                {
                  author: 'Fab Dynamic',
                  author_introduction_html: '<p><strong>動態自造實驗室(FabLab Dynamic)</strong>以社會設計(Social Design)為發展核心方向,透過數位製造技術,針對社會需求而提出改善、改造的創新專案,發展在地特色。主要提供開放空間、完善設備、專業技術諮詢為核心營運內容,透過跨領域合作,建立跨文化、藝術、設計、工業、建築、製造、環境等多元領域平台,鼓勵在製造過程中以開放設計概</p><p>念,輔以網路資訊公開(Open source),搭配各式工作坊、講座等教育推廣活動,發展「國際化」架構中的「在地化」,達到和國際接軌、創新研發製造等目標。</p>',
                  author_introduction_en_html: '<p>Founded in social design as the core development direction, FabLab Dynamic focuses on the studies and practices of culture, art, design, industry, architecture, and manufacture. From projects of social design to multidisciplinary collaborations, FabLab Dynamic keeps trying to push the boundaries and look forward to all possibilities in the future.</p>',
                  author_pic: require('../assets/works/dynamic/dynamic_author_01.png'),
                },
                {
                  author: 'IDEAS Lab – Launch Ideas',
                  author_introduction_html: '<p>IDEAS Lab，將創意落實的實驗室。結合大小數據的使用者研究方法、産品服務設計與原型製作驗證等多元設計手法，連結創新服務資源網絡，協助新創加速概念驗證階段MVP產品服務(Minimal Viable Product)到上市。近三年已累積協助超過 30 項創新產品服務的概念具體化，並成功推出市場。</p>',
                  author_introduction_en_html: '<p>IDEAS Lab aims to make creative ideas into real products or services, by integrating muli-discipline methods like qualitative and quantitative user research methods, product service design, prototyping skills. We have already assisted developing over 30 innovative products and services from abstract ideas into physical objects and launch to the market, by accelerating the MVP validation. </p>',
                  author_pic: require('../assets/works/dynamic/idea.jpg'),
                },
              ],
              description_en_html: "<p>In Husserl's phenomenology, the key to the relationship between self and object is the affection. As the affection accumulates and deepens, the change of the process will eventually make the relationship between the self and the object in a deeper way.</p><p>&nbsp;</p><p>＂Floating＂ is a description of the state movement between dynamic and static, which is in the status quo to be defined. The movement of the viewer in the space, the distance between the installation is transformed into an interactive trigger signal. The intervention of the viewer in the space is not only the signal feedback of the trigger installation, but also the trigger of the perceptual process, and the triggered perceptual process. It is the result of a series of continuous definitions. For example, Husserl proposed that ＂the stay is stable and continuous, so that every subsequent point is the stay of the previous point.＂ That is, each sensuous stay of the viewer in the process will follow the relationship between the self and the device is obtained in the continuous chain of successive stays.</p><p>&nbsp;</p><p>In the light and floating installation, light and shadow chase in between, outline the floating illusion. At the moment of the blink of light, the invisible pulse signal continued to trigger, and the intangible and intangible dialogues filled the sensuous space between the viewer and the installation in an instant. The different gaze desires of each person flashed between the bright and the dark. The measurement and description of the gaze With the intentional or unintentional movement of the viewer, the process of perceptual detention is continuously deduced with the device, and it is the state definition of every moment.</p>",
              description_html: '<p>胡塞爾現象學中對於自我與對象的關係，指出其中之關鍵即為觸發現象。隨著觸發的累積與深入，過程的變化最終將使自我與對象的關係呈現出深刻的面貌。</p><p>&nbsp;</p><p>「漂浮」是介於動態與靜態之間狀態游移，處於待定義現狀的描述。觀者在展場中的移動，其與裝置之間的距離轉化成互動的觸發指令，觀者在空間的介入，不僅是觸發裝置的訊號回饋，更是感性過程的觸發，而觸發的感性過程是一系列連續定義的結果，如胡塞爾提出「滯留的穩定連續，以至於每一個後面的點皆為前一個點的滯留。」亦即過程中的觀者每個感性滯留，最後將沿著逐次滯留的連續鏈中得到自我與裝置的關係樣態。</p><p>&nbsp;</p><p>輕盈的飄浮載體，光影追逐其間，勾勒出漂浮中的幻影。浮光掠影的剎那，在不可見的脈衝訊號持續觸發，虛實交織而無形的對話，轉瞬填滿觀者與裝置間的感性空白，明滅之間閃映出每個人不同的凝視慾望，凝視的度量與描繪伴隨著觀者有意或無心的移動，與裝置不斷演繹著感性滯留過程，更是次次瞬間的狀態定義。</p>',
              pic: [
                require('../assets/works/dynamic/dynamic01.jpg'),
                require('../assets/works/dynamic/dynamic02.jpg'),
              ]
            },
            {
              name: '平衡下的外力-磁 / Forces in Equilibrium- Magnetic',
              authors: [
                {
                  author: '陳威郡',
                  author_introduction: '陳威郡，畢業於國立臺北藝術大學新媒體藝術研究所，主修互動藝術。在創作中經常討論觀者與裝置的關係，強調互動的介面與回饋，並在生活中汲取靈感，將基本的物理元素融入成觀者與裝置的媒介，想像物質更深層的意義。作品結合互動感測、數位影像、動力機構裝置進行創作。',
                  author_introduction_en: 'Chen Wei Chun, graduated from the Graduate Institute of New Media Arts, Taipei National University of the Arts, majored in interactive art. I attempt to explore the relationship between the viewer and the installation in my artworks, and emphasize the interactive interface and feedback. I get inspiration from my daily life and integrate basic physical elements into the medium of viewers and installations, try to imagine the deeper meaning of natural substance. My works combines interactive sensor, digital visions, and kinetic installations.',
                  author_pic: require('../assets/works/mag/mag_author.png'),
                },
                {
                  author: '黃裕雄',
                  author_introduction: '黃裕雄老師畢業於國立臺北藝術大學美術系，自2003年起投入互動科技研發與新媒體藝術跨領域研究，研究領域包含：互動多媒體設計、感測器原理與應用、數位影像設計、TUI可觸握跨介技術應用、新媒體科技實作等，具多年跨領域實務資歷，迄今已發表國際SSCI期刊與研討會論文20餘篇，並擔任科技部、教育部、文化部多項計畫協同主持人，執行新媒體科技應用與整合、創客教育、文化創意結合創新科技等相關大型研究計畫。',
                  author_introduction_en: 'Yu-Hsiung Huang graduated from the Fine Arts Department of National Taipei University of the Arts and the Institute of Educational Technology of Tamkang University. Since 2003, he has been engaged in interactive technology research and development and new media art in transdisciplinary research. The research areas include: interactive multimedia design, sensors application , digital image design, TUI tangible cross-media technology application, new media technology implementation, etc., He has many years of transdisciplinary practical experience and has published more than 20 international SSCI journals and seminar papers. He has served as the Ministry of Science and Technology, Ministry of Education, Co-host of a number of projects of the Ministry of Culture to implement large-scale research projects.',
                  author_pic: require('../assets/works/mag/shion.jpg'),
                },
                {
                  author: '許素朱',
                  author_introduction: '目前為國立清華大學藝術學院院長暨科技藝術研究中心主任，專長為科技藝術、數位文創、STEAM創新教育。長年推動台灣科技藝術發展與跨域教育，曾成立台灣第一個科技藝術研究所，是台灣科技藝術結合的重要先鋒與橋樑。近年深覺跨域教育需從小紮根，遂推動「有A的STEM」創新教育，並開創STEAM123引導式創意教學，期盼這推動不只是跨學科教育運動，更是文化深耕運動。',
                  // author_introduction_en: 'Chen Wei Chun, graduated from the Graduate Institute of New Media Arts, Taipei National University of the Arts, majored in interactive art. I attempt to explore the relationship between the viewer and the installation in my artworks, and emphasize the interactive interface and feedback. I get inspiration from my daily life and integrate basic physical elements into the medium of viewers and installations, try to imagine the deeper meaning of natural substance. My works combines interactive sensor, digital visions, and kinetic installations.',
                  author_pic: require('../assets/team/nio.jpg'),
                },
              ],
              description_en: 'In “Forces in Equilibrium- Magnetic”, the digital method is used to perform the analog of unbalance. The “magnetic balance” is taken as the interactive interface, when the audience touch the magnets, it will oscillate, meanwhile triggering the changes of sounds and the visions projected on the wall. “Magnetic balance” is a state of balance after placing several magnets, usually three to four magnets, one magnet is placed in the center, and the other magnets are placed at an inclined angle, which can create a semi-floating effect. People can feel the small resistance of magnetic force when they touch the semi-floating magnet lightly. A slight touch can make all the semi-floating magnets oscillate up and down, and slowly return to calm. I invite viewers to intervene in this magnetic balance system to change the visions and sounds. The magnetic balance system is simple and relatively small. The vision projected on the wall is a 3D ball composed of hundreds of dots. The viewer touches the magnet to cause the magnetic balance system to be unbalanced. The energy of the physical imbalance is converted into the changes of visions and sounds. The more the semi-floating magnet is pressed down, the more the image ball will change rapidly and become more out of control, and constantly plays the rapid noise. After the hands are removed, the semi-floating magnets will interfere with each other and oscillate, gradually becoming balanced',
              description: '〈平衡下的外力-磁〉 以「磁平衡」為互動介面，藉由觀者觸碰半浮空的磁鐵製造震盪，並在系統失衡時觸發聲響與牆面投影的變化，以數位手段描繪類比失衡的掙扎。磁平衡是個透過幾個磁鐵經擺放後的平衡狀態，通常是三到四顆磁鐵，一顆磁鐵擺放中心，其他磁鐵則小心的傾斜擺放，能製造一個半浮空的效果，觸碰磁平衡狀態的半浮空磁鐵能感受磁力微小的阻力，輕微觸碰能製造所有半浮空磁鐵的上下震盪，並回歸平靜。〈平衡下的外力-磁〉透過觀者介入磁平衡系統回饋影像與聲音，磁平衡系統單純又相對小型，投影在一旁牆上的畫面是一由數百顆圓點構成的3D圓球，緩慢細微地擾動，觀者輕觸磁鐵導致磁平衡系統失衡，物理失衡的能量轉化成影像變化與聲響，半浮空磁鐵被下壓越多， 影像的圓球會更失控的快速變化、形變得更厲害，並不斷的播放急促的噪音，手移開後，半浮空的磁鐵會互相干擾震盪，漸漸趨於平衡。',
              pic: [
                require('../assets/works/mag/mag01.jpg'),
                require('../assets/works/mag/mag02.jpg'),
              ]
            },
            {
              name: '花繡 / Hua-Shiou',
              authors: [
                {
                  author: '陳玟君',
                  author_introduction_html: '<p>負責程式與美術輔助，熱愛跨領域的結合，期望能學習各項領域。</p>',
                  author_introduction_en_html: '<p>Chen Wen-Chun works as programmer and design assistant in the team. She has great passion for fusion of different fields, and hopes to be a cross-disciplinary talent.</p>',
                  author_pic: require('../assets/works/hua/hua_author_01.jpg'),
                },
                {
                  author: '郭家蓉',
                  author_introduction_html: '<p>負責裝置設計、影片製作，對空間、陳列擺設設計有興趣。</p>',
                  author_introduction_en_html: '<p>Kuo Chia-Jung is in charge of installation design and film editing. She is interested in space and interior furnishing design.</p>',
                  author_pic: require('../assets/works/hua/hua_author_02.jpg'),
                },
                {
                  author: '陳品儒',
                  author_introduction_html: '<p>負責程式，喜歡嘗試新事物並應用在作品上，期望成為程式設計師。</p>',
                  author_introduction_en_html: '<p>Chen Pin-Ju is responsible for programming. She likes to trying new things, and strives to become a programmer.</p>',
                  author_pic: require('../assets/works/hua/hua_author_03.jpg'),
                },
                {
                  author: '陳稚涵',
                  author_introduction_html: '<p>負責美術，熱愛視覺設計、動態影像，樂於挑戰與突破自我風格。</p>',
                  author_introduction_en_html: '<p>Chen Chih-Han is a designer with a passion for visual and motion design, and likes to challenge herself.</p>',
                  author_pic: require('../assets/works/hua/hua_author_04.jpg'),
                },
                {
                  author: '洪子晴',
                  author_introduction_html: '<p>負責裝置與美術輔助，喜歡影音製作及接受挑戰並培養多方位能力。</p>',
                  author_introduction_en_html: '<p>Hung Tzu-Ching acts as an installation designer and design assistant in the team. She takes pleasure in editing video, interdisciplinary learning, and dare to accept challenge.</p>',
                  author_pic: require('../assets/works/hua/hua_author_05.jpg'),
                }
              ],
              description_en_html: "<p>Embroidery is a skill as delicate as painting, However, in modern times, the emergence of machine embroidery made traditional embroidery gradually be replaced by machines, and this ability also turned into traditional skill from housework. Therefore,”Hua-Shiou” via an embroidery hoop device projected in the air, combined with traditional room design of window paper-cuts, the audience is expected to experience more in the interactive process, not only experiencing the embroidering process with a needle but also discovering where embroidery is really interesting.</p>",
              description_html: '<p>刺繡是一項如作畫般細膩的技藝，近代由於電繡出現，傳統刺繡逐漸被機器取代，也從家事轉為傳統技藝。「花繡」藉由浮空投影繡架裝置，結合傳統窗花設計，使互動過程更具層次。讓觀眾體驗刺繡，發現刺繡有趣的地方。</p>',
              pic: [
                require('../assets/works/hua/hua_01.jpg'),
                require('../assets/works/hua/hua_02.jpg'),
                require('../assets/works/hua/hua_03.jpg')
              ]
            },
            {
              name: '來自XXX / Gifts from XXX',
              authors: [
                {
                  author: '馬愛諾',
                  author_introduction: '馬愛諾，畢業於實踐大學媒體傳達設計學系。致力於互動藝術，展現形式多元，仍在摸索嘗試不同的可能性。平時藉由書寫來治療生活上的傷痛，相信文字有治癒的力量，也將此運用在本次作品上，期許能透過不同互動及閱讀形式與參與者共鳴。',
                  author_introduction_en: 'AI-NO, MA, a graduate of Shih-chien University with a major in media communications design. Dedicate myself to interactive art and multiple ways of representing while constantly testing every possibility. I heal myself from the suffering of life through writing because I believe the healing power of words and utilize it in this work, hoping to resonate with audiences through different interactions and forms of reading.',
                  author_pic: require('../assets/works/xxx/xxx_author.jpg'),
                }
              ],
              description_en_html: '<p>Someone I loved once gave me a box full of darkness.</p><p>It took me years to understand</p><p>that this, too, was a gift. &mdash;&mdash;《 The Uses of Sorrow 》Mary Oliver<br />The occurrence of a single event often results from a series of events.</p><p>One&rsquo;s act may just reflect part of the structure of the society.</p><p>&nbsp;</p><p>Seven boxes with seven narratives.</p><p>As lifting the lid of the box, internal gears will operate, and by each engraving in the respective box, one past shall be unveiled. When I meet more people as the time goes by, I become more capable of empathize with those who once dropped me pain and sorrow. Learning to accept those bygone miseries, I found myself a tentative answer and distilled the essentials from it to face the future.</p><p>The participant is also the author of the story. By engravings and gears, each box maneuvers audiences into connecting their own histories with the narrative, and thus the image will be reinterpreted. In the moment like this, the story in the box becomes a gift once again, a gift for those who are trapped in the same adversity, whispering to them that they are not alone.</p><p>&nbsp;</p><p>Grateful to those people for bringing me gifts of my lifetime.</p>',
              description_html: '<p>「愛過的人給我一個盒子，裡面裝滿了黑暗，</p><p>多年之後我才發現，那也是種禮物。」&mdash;&mdash; 《悲傷的用途》瑪莉奧利佛</p><p>一個單一事件的發生，往往是很多事件堆疊的結果；眼前某人的行為，也許正是某部分社會結構的縮影。</p><p>用七個盒子講述七個故事，輕啓盒蓋後，盒內的機構將緩緩轉動，配合其中的刻字，講述一段過往。隨著時間增長，有了更多際遇，而更能同理過去那些人事物的處境、學習接受過去的傷痛，給自己「暫時」的答案，從中汲取面對未來的養分。</p><p>每一位參與者，也成為故事的作者，藉由文字與機構，引導觀察者與自身的過往連結，令盒內的意象被重新詮釋。</p><p>而在這樣的時刻，盒內的故事又再度成為禮物，希望同在迷惘的人，能感受到自己並不孤單&mdash;&mdash;謝謝這些人事物、帶給我人生的禮物。</p>',
              pic: [
                require('../assets/works/xxx/xxx01.jpg'),
                require('../assets/works/xxx/xxx02.jpg'),
                require('../assets/works/xxx/xxx03.jpg'),
              ]
            }, 
            {
              name: '語林 / Talking Forest',
              authors: [
                {
                  author: '曾偉豪',
                  author_introduction: '我企圖在規格化控制的環境中找尋人的真實感受，希望透過簡單、基本、隨手可得的一些媒材，來尋找其中潛藏的可能性。「聲音」系列的作品，主要呈現出不可見的作用力、反動、無所謂和陌生的感官感受。我的創作雖然是由理性邏輯架構出發，媒材上也趨近於理性科學的範疇，但我所強調的不是技術上的魅力，而是精神意識的向度，也就是「真實的溝通」。',
                  author_introduction_en: 'I continually seek out real human feelings in a regularized and controlled environment and to this end utilize simple, basic and easily available materials to determine the possibilities contained therein. Series of works, “Sound”, mainly attempted to highlight invisible efforts, reactions, the perceptual feeling of indifference and the unfamiliar.Although my works start life as part of a rational and logical framework and also tend to be categorized as rational and scientific in terms of media, the focus of these pieces is not technical appeal but rather spiritual consciousness, or what I would define as “real communication.” ',
                  author_introduction_html: '<p><span><span>2004</span><span>&mdash;從事藝術創作至今</span></span></p><p><span><span>1999</span><span>&mdash;2004國立臺南藝術學院 造形藝術研究所畢業</span><span> 藝術碩士</span><span>&nbsp; </span></span></p><p><span><span>1995</span><span>&mdash;1999國立台灣藝術學院 雕塑系畢業 藝術學士&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></p><p><span><span>2004</span><span>&mdash;</span><span>All time artist</span></span></p><p><span><span>1999</span><span>&mdash;</span><span>2004 Graduate Institute of Plastic Arts , Tainan National College of the Arts M.F.A </span></span></p><p><span><span>1995</span><span>&mdash;</span><span>1999 Graduate Department of Sculpture, National Taiwan College of the Arts&nbsp;&nbsp; B.F.A</span></span></p>',
                  author_pic: require('../assets/works/forest/forest_author.jpg'),
                }
              ],
              description: '作品想表達一種身處聲音風景的想像。在環境中，每個對話、每個聲音都有其獨特的頻率，在人與人對話或人與自然環境互動的同時也被這些獨特的頻率穿透，創造一種可以讓身體接收穿越的視聽感受。作品中的黑色區塊是藝術家從一些對話和自然環境錄音擷取下來的頻率圖，當這些圖樣翻轉成垂直時，非常像樹的樣子，並透過這樣的聯結想像對話成為一座森林，雖看不見卻身處其中。希望透過這樣的視覺形式和身體接觸的互動聲音，讓觀眾感受到被聲音穿透的感覺，就像進入一個由話語聲音所構成的森林風景。',
              description_en: 'With this work I seek to express my feelings at finding myself in a sound landscape. In the environment in which we live, each conversation or sound has its own unique frequency. However, as people converse with each other or interact with the natural environment they are also penetrated by these unique frequencies. As such, I wanted to create a visual and aural sensation that allow people to physically view those frequencies. The black areas in the work represent a frequency chart derived from recorded conversations and sound from nature. When these are placed vertically they look like trees very much. It is through this connection that viewer would be able to imagine conversations as a forest, something that although invisible to the human eye surrounds all of us. I utilize this visual form and the interactive sound created from contact with people in a way that allows us to feel first hand the sensation of being penetrated by sound. In this way, viewers are transported into a landscape made from words and sound.',
              pic: [
                require('../assets/works/forest/forest01.jpg'),
                require('../assets/works/forest/forest02.jpg'),
                require('../assets/works/forest/forest03.jpg'),
              ]
            },
          ]
        },
        {
          place: 'STEAM 互動探索館',
          title: '教育館「STEAM互動探索館」(執行策展：張雅婷)',
          description: '主要展覽品為科藝中心FBI LAB耗費年餘開發的「有A的STEM」22件科普藝術互動體驗小品以及10件績優小學教師徵選的作品；除此還有「您的美朋友」美感教育平台，讓您知道教育部對於推廣「美感教育」著實用心喔。在STEAM互動探索館中，我們期望大家來做個好奇愛動手做的Tinker、做個探索跨學科原理的Explorer、做個創意轉化實踐創造的Maker。展期間，我們採團體導覽〈請預約〉及定時解說模式，冰釋您心中的疑問，並填滿您好奇之心。',
          authors: [
            {
              name: '',
              description: '',
              pic: ''
            }
          ],
          work: [
            {
              name: '看到Ａ了嗎？',
              authors: [
                {
                  author: '許素朱',
                  author_introduction_html: '',
                  author_introduction_en_html: '',
                  author_pic: '',
                },
                {
                  author: '張雅婷',
                  author_introduction_html: '',
                  author_introduction_en_html: '',
                  author_pic: '',
                },
                {
                  author: '紀宥羽',
                  author_introduction_html: '',
                  author_introduction_en_html: '',
                  author_pic: '',
                },
              ],
              description_en_html: "",
              description_html: '<p>動動手，A在哪裡? 你看到了嗎？</p>',
              pic: [
                
              ]
            },
            {
              name: '潤滑魔力拍',
              authors: [
                {
                  author: '',
                  author_introduction_html: '',
                  author_introduction_en_html: '',
                  author_pic: '',
                }
              ],
              description_en_html: "",
              description_html: '<p>快來摸摸看，讓你的手重回嬰兒皮膚的滑嫩。</p>',
              pic: [
                
              ]
            },
            {
              name: '瓶兒響叮噹',
              authors: [
                {
                  author: '',
                  author_introduction_html: '',
                  author_introduction_en_html: '',
                  author_pic: '',
                }
              ],
              description_en_html: "",
              description_html: '<p>是瓶子？還是鈴鐺？怎麼可以響叮噹呀？</p>',
              pic: [
                
              ]
            },
            {
              name: '可看見的聲音',
              authors: [
                {
                  author: '',
                  author_introduction_html: '',
                  author_introduction_en_html: '',
                  author_pic: '',
                }
              ],
              description_en_html: "",
              description_html: '<p>我用眼睛看見聲音，你呢？快來試試！</p>',
              pic: [
                
              ]
            },
            {
              name: '大環小圈懸浮轉',
              authors: [
                {
                  author: '',
                  author_introduction_html: '',
                  author_introduction_en_html: '',
                  author_pic: '',
                }
              ],
              description_en_html: "",
              description_html: '<p>小鴨搖搖屁股跟母鴨，快來照相喔。</p>',
              pic: [
                
              ]
            },
            {
              name: '磁陀螺跳探戈',
              authors: [
                {
                  author: '',
                  author_introduction_html: '',
                  author_introduction_en_html: '',
                  author_pic: '',
                }
              ],
              description_en_html: "",
              description_html: '<p>來喔，來喔，大家來看磁陀螺跳探戈！</p>',
              pic: [
                
              ]
            },
            {
              name: '以小博大',
              authors: [
                {
                  author: '',
                  author_introduction_html: '',
                  author_introduction_en_html: '',
                  author_pic: '',
                }
              ],
              description_en_html: "",
              description_html: '<p>誰怕誰！以為小個子沒力氣嗎？！</p>',
              pic: [
                
              ]
            },
            {
              name: '懸浮方塊',
              authors: [
                {
                  author: '',
                  author_introduction_html: '',
                  author_introduction_en_html: '',
                  author_pic: '',
                }
              ],
              description_en_html: "",
              description_html: '<p>這不是魔術，方塊真的懸浮起來了，這是你自己的超能力喔。</p>',
              pic: [
                
              ]
            },
            {
              name: '一體兩面',
              authors: [
                {
                  author: '',
                  author_introduction_html: '',
                  author_introduction_en_html: '',
                  author_pic: '',
                }
              ],
              description_en_html: "",
              description_html: '<p>那ㄟ安呢？！魔鏡魔鏡，告訴我為什麼會這樣！</p>',
              pic: [
                
              ]
            },
            {
              name: '費納奇鏡動畫',
              authors: [
                {
                  author: '',
                  author_introduction_html: '',
                  author_introduction_en_html: '',
                  author_pic: '',
                }
              ],
              description_en_html: "",
              description_html: '<p>費納奇是什麼啊？是鏡子？是動畫？</p>',
              pic: [
                
              ]
            },
            {
              name: '看見了誰？',
              authors: [
                {
                  author: '',
                  author_introduction_html: '',
                  author_introduction_en_html: '',
                  author_pic: '',
                }
              ],
              description_en_html: "",
              description_html: '<p>恐怖喔，是不是有陰陽眼？怎會看到不一樣的人呢？</p>',
              pic: [
                
              ]
            },
            {
              name: '音樂碰碰椅',
              authors: [
                {
                  author: '',
                  author_introduction_html: '',
                  author_introduction_en_html: '',
                  author_pic: '',
                }
              ],
              description_en_html: "",
              description_html: '<p>別懷疑，請坐，就有音樂饗宴，免費入場喔。</p>',
              pic: [
                
              ]
            },
            {
              name: 'Arduino小人國世界',
              authors: [
                {
                  author: '',
                  author_introduction_html: '',
                  author_introduction_en_html: '',
                  author_pic: '',
                }
              ],
              description_en_html: "",
              description_html: '<p>格列佛遊記就在這，歡迎穿越時空來到小人國。</p>',
              pic: [
                
              ]
            },
            {
              name: '智慧成語方塊',
              authors: [
                {
                  author: '',
                  author_introduction_html: '',
                  author_introduction_en_html: '',
                  author_pic: '',
                }
              ],
              description_en_html: "",
              description_html: '<p>人家是魔術方塊，我是智慧方塊，幫助你成語拼字喔。</p>',
              pic: [
                
              ]
            },
            {
              name: '彈珠的遊樂園',
              authors: [
                {
                  author: '',
                  author_introduction_html: '',
                  author_introduction_en_html: '',
                  author_pic: '',
                }
              ],
              description_en_html: "",
              description_html: '<p>彈珠也有自己的遊樂園，它在遊樂園裡玩得不亦樂乎！</p>',
              pic: [
                
              ]
            },
            {
              name: '協力滾球台',
              authors: [
                {
                  author: '',
                  author_introduction_html: '',
                  author_introduction_en_html: '',
                  author_pic: '',
                }
              ],
              description_en_html: "",
              description_html: '<p>跟朋友合作一起玩吧！一起玩出活力與默契！</p>',
              pic: [
                
              ]
            },
            {
              name: '不可思議的上下制衡',
              authors: [
                {
                  author: '',
                  author_introduction_html: '',
                  author_introduction_en_html: '',
                  author_pic: '',
                }
              ],
              description_en_html: "",
              description_html: '<p>平衡與剛好最讓大家喜歡，這空間的上下制衡，就是剛好。</p>',
              pic: [
                
              ]
            },
            {
              name: '距離感應錯視覺',
              authors: [
                {
                  author: '',
                  author_introduction_html: '',
                  author_introduction_en_html: '',
                  author_pic: '',
                }
              ],
              description_en_html: "",
              description_html: '<p>你相信嗎？距離會讓你看到不一樣的視覺效果喔！</p>',
              pic: [
                
              ]
            },
            {
              name: '橢圓兩點也瘋狂',
              authors: [
                {
                  author: '',
                  author_introduction_html: '',
                  author_introduction_en_html: '',
                  author_pic: '',
                }
              ],
              description_en_html: "",
              description_html: '<p>橢圓有兩個特殊的點，他們的關係曖昧又瘋狂喔！</p>',
              pic: [
                
              ]
            },
            {
              name: '畢氏的組合',
              authors: [
                {
                  author: '',
                  author_introduction_html: '',
                  author_introduction_en_html: '',
                  author_pic: '',
                }
              ],
              description_en_html: "",
              description_html: '<p>畢氏定理大家都學過，但再加上組合數學，那要怎麼玩呢？</p>',
              pic: [
                
              ]
            },
            {
              name: '瑪麗蓮夢露的裙子',
              authors: [
                {
                  author: '',
                  author_introduction_html: '',
                  author_introduction_en_html: '',
                  author_pic: '',
                }
              ],
              description_en_html: "",
              description_html: '<p>這裙子，害羞啦！啊，是玩數學喔，嚇我一跳。</p>',
              pic: [
                
              ]
            },
            {
              name: '神妙的黃金角',
              authors: [
                {
                  author: '',
                  author_introduction_html: '',
                  author_introduction_en_html: '',
                  author_pic: '',
                }
              ],
              description_en_html: "",
              description_html: '<p>比扯鈴更扯，比神奇更神，肯定讓你過目難忘！</p>',
              pic: [
                
              ]
            },
            {
              name: '莫比斯環拓撲變',
              authors: [
                {
                  author: '',
                  author_introduction_html: '',
                  author_introduction_en_html: '',
                  author_pic: '',
                }
              ],
              description_en_html: "",
              description_html: '<p>莫比斯環從中間剪開，會變成什麼？從1/3處剪開，那又會變成什麼？</p>',
              pic: [
                
              ]
            },
            {
              name: '你的美朋友',
              authors: [
                {
                  author: '',
                  author_introduction_html: '',
                  author_introduction_en_html: '',
                  author_pic: '',
                }
              ],
              description_en_html: "",
              description_html: '<p>沒朋友嗎？我也是。快來找你的美朋友！</p>',
              pic: [
                
              ]
            },
          ]
        },
        {
          place: '科普藝術獎',
          title: '第一屆有A的STEM科普藝術獎',
          description: '清華大學 FBI Lab 近年碩謀戮力推動STEAM Making創新教育，盱衡大環境趨勢教育扎根應從小做起，冀盼為臺灣幼教跨域教學盡棉薄創願景。今年我們與麗山國小（臺北市卓越藝術教育計畫）齊辦首屆「有A的STEM-科普藝術獎」，鼓勵國小教師攜手合作共襄盛舉，激盪研討讓科普遇到藝術。此獎項設初選，嗣後入選作品在布展完成進行決選，最後由評審委員評選金、銀及銅獎以及優選與佳作。',
          work: [
            {
              name: '衝吧！無敵彈跳球！',
              authors: [
                {
                  author: '東園國小 熊培伶老師',
                }
              ],
              description_en_html: "",
              description_html: '<p>這是場充滿變化的刺激競賽，小選手請各取一粒奇妙閃光球，球滾下去的瞬間開始發出閃亮光芒，也表示它已經準備好奮力向前衝！參與衝鋒的小選手，必須自己設計軌道，運用「加速度運動」、「斜面運動」與「能量轉換：動能變光能」原理，最快且順利抵達終點的奇妙閃光球，就是這場比賽的大冠軍。</p><p>適用人數：2人</p>',
              pic: [
                require('../assets/works/ball/ball_01.jpg'),
                require('../assets/works/ball/ball_02.jpg'),
                require('../assets/works/ball/ball_03.jpg'),
                require('../assets/works/ball/ball_04.jpg'),
              ]
            },
            {
              name: '雙路電流急急樂',
              authors: [
                {
                  author: '麗山國小 蘇瑜琪老師',
                },
                {
                  author: '百齡國小 楊琇君老師',
                },
                {
                  author: '新生國小 鍾璧如老師',
                },
              ],
              description_en_html: "",
              description_html: '<p>「電」是一種能量，與人類生活習習相關，卻因抽象不可見，容易被人忽視。電池內的能量就像是水庫一般，當將電路接通時，能量從高電位(正極)流至低電位(負極)的過程中，就可以產生讓燈泡發亮、扇葉轉動…等效果，直到能量用完為止，效果才會消失，最後只剩下沒了能量的電池軀殼。藉由這系列的作品，讓觀眾實際參與「直接導通」、「手指間接觸發」及「動手玩急急樂」的體驗，來感受「藝術」與「電」結合的神奇效果！</p>',
              pic: [
                require('../assets/works/elec/elec_01.jpg'),
                require('../assets/works/elec/elec_02.jpg'),
                require('../assets/works/elec/elec_03.jpg')
              ]
            },
            {
              name: '法拉第寶盒',
              authors: [
                {
                  author: '辛亥國小 王宗科老師',
                }
              ],
              description_en_html: "",
              description_html: '<p>「新媒體藝術」透過科技讓藝術更豐富與多元。電則是成就科技的基礎。「法拉第寶盒」是向著名的大師與法拉第定律致敬。透過旋轉機制將銅線與磁產生電的關係，同樣在視覺上使用「快速旋轉」的方式，可以讓不同的顏色（色塊）產生「混色」效果。再透過電漿球讓觀眾「看得到電」並誘使與之「互動」，當觀眾看到鏡子中自己的表情，則完成設計者最原始的新媒體藝術創作概念。</p><p>（科技-互動-感受）</p>',
              pic: [
                require('../assets/works/far/far_01.jpg'),
                require('../assets/works/far/far_02.jpg'),
                require('../assets/works/far/far_03.jpg'),
              ]
            },
            {
              name: '箱響想像',
              authors: [
                {
                  author: '萬大國小 黃麗慈老師',
                },
              ],
              description_en_html: "",
              description_html: '<p>透過導電體來讓兩個金屬部件通電，達到聲音的觸發;此作品以 「人體」作為導電體，跳脫金屬導電的直覺，引發人與人接觸而發出聲音的趣味效果，並鼓勵以不同物品來實驗其導電特性，例如:剪刀、水果等。在「人與人」及「人與作品」的互動中，隨著接觸面積、部位、增減人數造成聲響的不同，探索聲音變化的原因，從「電導率」不同的結論，帶入電容、電阻的概念，用聽覺、觸覺、肌肉覺來經歷科學，更有感!</p>',
              pic: [
                require('../assets/works/shianshian/shian01.jpg')
              ]
            },
            {
              name: '幻彩光影箱',
              authors: [
                {
                  author: '萬福國小 陳雨禾老師',
                }
              ],
              description_en_html: "",
              description_html: '<p>觀者可以透過裝置觀察到色光光影變化，進而探索色光原理。可以用手身體部位來與裝置互動，或用光影片在裝置中探索。三原色的原理非出於物理原因，而是由生理原因造成。透過人類三種視錐細胞分別對紅、綠和藍光最敏感的原理。眼睛內錐形感光細胞對黃綠色、綠色和藍紫色的光最敏感，如辨別黃綠色的細胞受到的刺激略大於辨別綠色的細胞，人的感覺是黃色；如辨別黃綠色的細胞受到的刺激大大高於辨別綠色的細胞，人的感覺是紅色。</p>',
              pic: [
                require('../assets/works/shian/shian_01.png'),
                require('../assets/works/shian/shian_02.png'),
              ]
            },
            {
              name: '大食怪',
              authors: [
                {
                  author: '潭美國小 李文蘭老師',
                },
                {
                  author: '碧湖國小 賀思靜老師',
                },
              ],
              description_en_html: "",
              description_html: '<p>貪吃的大鱷魚想要吃到吊掛在空中的美食，動動腦，在不能用手移動食物的情況下，該如何讓大鱷魚飽餐一頓呢？發揮創造力，自由發想食怪與食物，將圖案彩繪在西卡紙上，並剪下。把棉線穿過吸管黏貼在西卡紙上，利用張力與摩擦力的原理，讓吸管的彎曲角度，由下而上依序變小。當吸管彎曲的角度不一樣，棉線的張力造成的摩擦力也會不同。只要輕輕碰或輕輕拉一下，物件即可依序掉下，讓大食怪飽餐一頓。</p>',
              pic: [
                require('../assets/works/eat/eat01.jpg'),
                require('../assets/works/eat/eat02.jpg'),
                require('../assets/works/eat/eat03.jpg'),
              ]
            },
            {
              name: '磁力魔法',
              authors: [
                {
                  author: '新湖國小 劉沛彤老師',
                },
                {
                  author: '麗山國小 蘇瑜琪老師',
                },
                {
                  author: '麗山國小 張多蜜老師',
                },
              ],
              description_en_html: "",
              description_html: '<p>透過簡易互動裝置，讓觀眾在創作遊戲中體會磁力原理。<br />1.與孟克共舞&rarr;原理：磁鐵兩極，同極相斥，異極相吸。讓觀眾利用磁力原理和藝術家（孟克）作品共舞，以鐵粉聚散來創作。盒內鐵粉會沿著磁鐵產生的磁力排列，使畫作隨時產生變化。<br />2.動植物餵養秀&rarr;原理：磁化現象讓觀眾運用磁力移動指定物品至目的地。圓柱體容器內部裝入鐵粉或金屬物品，外層情境設計，觀眾使用磁鐵從容器外圍吸取指定物品至相對位置，完成互動遊戲。</p>',
              pic: [
                require('../assets/works/chi/chi_01.jpg'),
                require('../assets/works/chi/chi_02.jpg'),
                require('../assets/works/chi/chi_03.jpg'),
              ]
            },
            {
              name: '彩色魔方',
              authors: [
                {
                  author: '福德國小 林孟峰老師',
                },
              ],
              description_en_html: "",
              description_html: '<p>創作採平面設計傳達的視覺色彩感受，透過平面二為交織產生立體物件，會隨著構圖角度的改變，而產生相應的色彩變化，原理運用常規視角再輔以透視視角運用創作，讓作品採以移動與轉動式的物件面積改變，造成眼睛所接受到的的色彩面積切換改變，當觀者的視線與設計中對象物成為一個左右側角度轉換時，就能回饋觀者體驗顏色轉換，若再輔以不同媒材、材料的色彩配對以及造型外廓變化，更能提供完全不同的色彩變化感受。</p>',
              pic: [
                require('../assets/works/fang/fang01.jpg'),
                require('../assets/works/fang/fang02.jpg'),
                require('../assets/works/fang/fang03.jpg'),
              ]
            },
            {
              name: '幻彩心世界',
              authors: [
                {
                  author: '政大實小 郭宗德老師',
                },
                {
                  author: '政大實小 邱語柔老師',
                },
                {
                  author: '政大實小 廖怡捷老師',
                },
                {
                  author: '武功國小 蔡思嘉老師',
                },
                {
                  author: '景興國小 吳憶禎老師',
                },
                {
                  author: '三興國小 林靜怡老師',
                },
                {
                  author: '僑愛國小 張閔琇老師',
                },
                {
                  author: '協力指導老師：友善元件 葉長青博士、陳昌佑先生、施凱韻小姐',
                },
              ],
              description_en_html: "",
              description_html: '<p>光的波動性在十九世紀初期被科學界確認，本創作運用兩片偏光膜之間角度的變換，造成類似柵欄的效果，讓與柵欄平行的波動光線得以通過，形成不同的光線色彩變化；再透過裝置內的鏡面設計，讓光線產生反射在對應的鏡面牆，形成畫面疊加延伸的彩光效果。</p><p>以上原理，透過情境解謎模式、藝術創作構思與互動式電學原理的設計，讓偏光膜產生出驚豔的視覺感受。 特別感謝友善元件葉長青博士、陳昌佑博士、施凱韻小姐提供諮詢與協助。</p>',
              pic: [
                require('../assets/works/huan/huan_01.jpg'),
                require('../assets/works/huan/huan_02.jpg'),
                require('../assets/works/huan/huan_03.jpg'),
              ]
            },
            {
              name: '請聽我說',
              authors: [
                {
                  author: '天母國小 高玉芳老師',
                },
                {
                  author: '天母國小 陳藝心老師',
                },
                {
                  author: '石牌國小 阮梨碧老師',
                },
              ],
              description_en_html: "",
              description_html: '<p>Ａ＋Ｓ</p><p>透過水管與漏斗組合的「STEAM」字型，從互動中體會聲音藉由空氣傳遞的原理。 聲音的產生：由於物體的振動，才能產生聲音。 聲音的傳遞：傳播聲波的介質，可以是固體、液體或氣體。 由於氣候變遷，北極熊的棲息地正在融化，澳洲叢林大火讓許多無尾熊喪生。北極熊會發出什麼樣的吶喊?無尾熊想說出什麼心聲?讓棕熊、貓熊、臺灣黑熊、小熊貓一起聽聽牠們的需求吧! 想一想，每一個發話位置都能聽到聲音嗎?</p>',
              pic: [
                require('../assets/works/please/please_01.jpg'),
                require('../assets/works/please/please_02.jpg'),
                require('../assets/works/please/please_03.jpg'),
              ]
            },
          ]
        }
      ]
    }
  },
  watch: {
    '$route.query.work_number'() {
      if (this.$route.query.work_number) {
        this.work_number = this.$route.query.work_number;
      }
    },
    '$route.query.place_number'() {
      if (this.$route.query.place_number) {
        this.work_place = this.$route.query.place_number
      }
    },
    'work_number'() {
      this.pic_number = 0;
    },
    'work_place'() {
      this.pic_number = 0;
      if (this.$route.query.work_number ==undefined) {
        // location.href = '#exhibition'
        // this.work_number = 0;
      }
    },
    // 'now_place'() {
    //   if (this.now_place === 1 || this.now_place === 2 || this.now_place === 3 || this.now_place === 4) {
    //     this.work_place = this.now_place;
    //   }
    // }
  },
  created() {
    
  },
  mounted() {
    
    if (this.now_place === 1 || this.now_place === 2 || this.now_place === 3) {
      this.work_place = this.now_place;
    }
  },
  computed: {
    place_authors() {
      var authors = [];
      var no_repeat = [];
      for (var i = 0; i < this.work_list[Math.ceil(Number(this.work_place) - 1)].work.length; i++) {
        for (var j = 0; j < this.work_list[Math.ceil(Number(this.work_place) - 1)].work[i].authors.length; j++) {
          if (this.work_list[Math.ceil(Number(this.work_place) - 1)].work[i].authors[j].author !== "") {
            authors.push(this.work_list[Math.ceil(Number(this.work_place) - 1)].work[i].authors[j].author)
          }
        }
      };
      no_repeat = authors.filter((item, index, arr) => arr.indexOf(item) === index);
      console.log(no_repeat);
      return no_repeat;
    }
  },
  methods: {
    to_exhibition(i) {
      if (Math.ceil(Number(i) + 1 !== 3)) {
        this.$router.push({params: {page: 'exhibition'}, query: {place_number: Math.ceil(Number(i) + 1), work_number: 1}})
      } else {
        this.$router.push({params: {page: 'exhibition'}, query: {place_number: Math.ceil(Number(i) + 1)}})
      }
    },
    to_work(j) {
      if (this.work_place !== 3) {
        this.$router.push({params: {page: 'exhibition'}, query: {place_number: this.work_place, work_number: Math.ceil(Number(j) + 1)}})
      } else {
        this.$router.push({params: {page: 'exhibition'}, query: {place_number: this.work_place}})
      }
    }
  },
  
  
}
</script>

<style lang="sass" scoped>
@import '@/assets/mixin.sass'
.work
  position: relative
  width: 100%
  +flexcolumn
  align-items: center
  padding: 120px 0 0 0
  z-index: 5
  .work_tab_block
    width: 50%
    +flexcolumn
    margin-bottom: 50px
    +com
      width: 90%
      margin-bottom: 0
    +pad
      margin-bottom: 10px
    .work_tab
      border-bottom: solid 1px #777
      padding: 0 12px 0 0
      +flexrow
      +phone
        +flexcolumn
        padding: 0
      .work_tab_text
        font-size: 20px
        letter-spacing: 3px
        line-height: 35px
        color: #777
        text-align: right
        margin-right: 30px
        cursor: pointer
        padding: 0 5px
        
        +com
          font-size: 18px
          margin-right: 40px
        +phone
          text-align: left
          margin-right: 0
        &.select_A
          background-color: $coloryellow
          color: blackB
        &.select_B
          background-color: $colorgreen
          color: black
        &.select_C
          background-color: $colororange
          color: black
        &.select_D
          background-color: $colorblue
          color: black
    .work_text_block
      flex-wrap: wrap
      margin-bottom: 30px
      // min-height: 170px
      // margin-left: 7px
      .work_block_for_height
        // min-height: 100px
        +flexrow
        flex-wrap: wrap
        .work_tab_works
          font-size: 18px
          margin-right: 10px
          margin-top: 10px
          letter-spacing: 1.5px
          background-color: white
          min-height: 25px
          padding: 2px 5px
          color: #777
          cursor: pointer
          height: max-content
          // display: inline-block
          // margin-bottom: 10px
          &.select
            background-color: #555
            color: #fff
        
  .work_slide
    width: 100%
    +flexcolumn
    align-items: center
    .work_slide_pic_block
      width: 50%
      height: 28vw
      position: relative
      +com
        width: 90%
        height: 55vw
      .work_slide_pic
        position: absolute
        width: 100%
        height: 100%
    .work_slide_other_pic
      width: 50%
      +flexrow
      +com
        width: 90%
      .pic
        width: 70px
        height: 45px
        margin-right: 5px
        margin-top: 5px
        cursor: pointer
  .work_content_block
    width: 50%
    +com
      width: 90%
    .work_title
      font-size: 25px
      // color: #777
      margin-top: 30px
      font-weight: bold
      letter-spacing: 1.5px
      .work_content
        font-weight: 300
        font-size: 18px
        letter-spacing: 2px
        line-height: 35px
        margin-top: 20px
        text-align: justify

      // .en
      //   margin-top: 20px
      //   letter-spacing: 1px
      .work_author_title
        border-bottom: solid 1px #777
        padding: 0 0 10px 0
        margin-top: 30px
      .work_author_block
        margin-top: 20px
        +flexrow
        flex-wrap: wrap
        .profile
          width: 100%
          box-sizing: border-box
          padding: 0 10px 0 0
          margin-top: 30px
          +flexrow
          // flex-wrap: wrap
          +pad
            // width: 35%
          +phone
            +flexcolumn
            width: 100%
            padding: 0
            margin-bottom: 50px
          &.work_place_four
            flex-direction: initial
            +phone
              margin-bottom: 0
          .picBlock
            width: 25%
            +flexcolumn
            align-items: center
            +phone
              width: 100%
            &.work_place_four_2
              align-items: initial
            .work_author_pic
              width: 10vw
              height: 10vw
              border-radius: 100%
              margin-top: 20px
              +com
                width: 15vw
                height: 15vw
              +smallcom
                width: 17vw
                height: 17vw
              +pad
                width: 25vw
                height: 25vw
              +phone
                margin-top: 30px
                margin-bottom: 30px
                width: 300px
                height: 300px
              &.fbi
                border-radius: 0
              &.move
                background-size: contain !important
                
            .work_author_name
              margin-top: 20px
              font-weight: 300
              font-size: 20px
              letter-spacing: 2px
              line-height: 35px
              +com
                font-size: 18px
              +phone
                font-size: 25px
              &.work_place_four_3
                margin-top: 0
                +phone
                  font-size: 20px
          .description
            width: 75%
            +pad
              width: 65%
              margin-left: 10%
            +phone
              width: 100%
              margin-left: 0
              margin-top: 30px
            .description_text
              font-size: 20px
              text-align: justify
              font-weight: 300
              letter-spacing: 2px
              line-height: 35px
              +com
                font-size: 18px
.en
  margin-top: 20px !important
  letter-spacing: 1px !important
  text-align: left !important
.work_place_title
  width: 100%
  font-size: 20px
  font-weight: bold
  letter-spacing: 1.5px
  margin-bottom: 20px
  margin-top: 20px

.work_place_description
  width: 100%
  font-size: 18px
  color: #333
  letter-spacing: 1.5px
  line-height: 35px
  text-align: justify

.work_place_authors_title
  width: 100%  
  font-size: 20px
  color: #333
  letter-spacing: 1.5px
  line-height: 35px
  font-weight: bold
  margin-top: 10px
.work_place_authors_block
  +flexrow
  flex-wrap: wrap
  margin-bottom: 20px
  // text-align: justify

  .work_place_authors
    display: inline-block
    width: max-content
    font-size: 18px      
    font-weight: normal   
    color: #333
    letter-spacing: 1.5px
    line-height: 35px
    +flexrow             
    .line  
      font-size: 18px   
      margin-left: 5px
      margin-right: 5px  
.dm
  width: 100%
  // +com
    // width: 0%
  .top
    width: 100%
    height: 46vw
    // +bb
    background: url('../assets/teach/dm01.jpg')
    +bgcon
    margin-bottom: 20px
    +com
      height: 83vw
  // .bottom
  //   width: 100%
  //   height: 12vw
  //   background: url('../assets/teach/dm02.jpg')
  //   +bgcon
  //   // +bb
  //   margin-bottom: 20px
  //   +com
  //     height: 21vw
.dm_arts
  width: 100%
  margin-top: -50px
  margin-bottom: -50px
  +phone
    margin: 0
  .top
    width: 100%
    height: 36vw
    // +bb
    background: url('../assets/teach/dm03.jpg')
    +bgcon
    margin-bottom: 0px
    +com
      height: 65vw
</style>