import { defineStore } from "pinia"
import { ref,computed} from "vue"


export const menuStore = defineStore('menu',() =>{
  const menulist = ref([
  {product:'Kikkoman Soy milk Orginal',cal:130,price:30,ml:' (200 ML)',discription:' คิคโคแมน นมถั่วเหลือง สูตรดั้งเดิม เติมเต็มสัมผัสอันเนียนนุ่มของนมถั่วเหลืองแท้ๆ',img:'https://static.wixstatic.com/media/c8a905_37f159f9a80d42618d4f2b8b83113fa1~mv2.jpg/v1/fill/w_670,h_446,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c8a905_37f159f9a80d42618d4f2b8b83113fa1~mv2.jpg'},
  {product:'Kikkoman Soy milk Sweet Potato',cal:130,price:30,ml:' (200 ML)',discription:'คิคโคแมน นมถั่วเหลือง รสมันหวานญี่ปุ่น ส่วนผสมที่ลงตัวระหว่างถั่วเหลืองคัดพิเศษกับมันหวานแท้ๆ จากประเทศญี่ปุ่น เติมรสสัมผัสเนียนนุ่มของถั่วเหลืองแบบเข้มข้น ผสมรวมกับความหอมหวานของมันหวานญี่ปุ่น อร่อยกลมกล่อม ให้รสชาติหวานกำลังดี เหมาะสำหรับการดื่มเป็นของหวานเพื่อสุขภาพได้ง่ายๆ สำหรับสายเฮลธ์ตี้',img:'https://static.wixstatic.com/media/c8a905_321d1ee91c094b47b8edaaa6236fec15~mv2.jpg/v1/fill/w_670,h_446,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c8a905_321d1ee91c094b47b8edaaa6236fec15~mv2.jpg'},
  {product:'Almond Breeze Unsweetend',cal:20,price:25,ml:' (180 ML)',discription:'บลูไดมอนด์ อัลมอนด์ บรีซ นมอัลมอนด์ (รสจืด) จากอัลมอนด์คุณภาพเยี่ยมจากแคลิฟอร์เนีย นมอัลมอนด์เพื่อสุขภาพ ยิ่งดื่ม ยิ่งได้ประโยชน์ มีแคลเซียมสูง มีวิตามินอี ไม่ผสมนมถั่วเหลือง และนมโค ปราศจากโคเลสเตอรอล',img:'https://th.bing.com/th/id/R.c9e4f270e4616fdbb67123242641898c?rik=rdHiLJ7masJnag&pid=ImgRaw&r=0'},
  {product:'Sunhist Pistachio Milk',cal:70,price:30,ml:' (180 ML)',discription:'นมพิสตาชิโอ ซันคิสท์ เลือกใช้ถั่วคัดพิเศษจากอเมริกา ได้ความหอมอร่อยพร้อมประโยชน์ รสชาติเข้มข้น กลมกล่อมได้ประโยชน์จากแคลเซียมและวิตามินต่างๆ ไฟเบอร์สูง ปราศจากแลคโตส กลูเตน และถั่วเหลือง',img:'https://th.bing.com/th/id/R.5629b256841ba9df031040d79ec76e27?rik=H2rWym4uZHJ3bg&pid=ImgRaw&r=0'},
  {product:'Kikkoman Black Sesame Soy Milk',cal:130,price:30,ml:' (200 ML)',discription:'ดื่มหนึ่งได้ถึงสอง กับคิคโคแมน นมถั่วเหลือง รสงาดำ ที่รวมความอร่อยเข้มข้นและหอมละมุน มาพร้อมกับคุณประโยชน์ของถั่วเหลืองที่มีโปรตีนสูง ผสานกับงาดำเข้มข้นจากประเทศญี่ปุ่น ผ่านการคั่วอย่างพิถีพิถัน ที่อุดมไปด้วยวิตามินและแร่ธาตุต่างๆ ซึ่งมีส่วนช่วยในการบำรุงร่างกายแทบทุกสัดส่วนทั้งภายในและภายนอก ช่วยบำรุงกระดูกและผิวพรรณ อีกทั้งยังมีส่วนช่วยบำรุงเส้นผมให้ดกดำเงางามอีกด้วย',img:'https://static.wixstatic.com/media/c8a905_60927a0e326c4dec8957d467a9bb119b~mv2.jpg/v1/fill/w_670,h_446,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c8a905_60927a0e326c4dec8957d467a9bb119b~mv2.jpg'},
  {product:'Kikkoman Unsweetened Soy Milk',cal:130,price:30,ml:' (200 ML)',discription:' อร่อยดีมีประโยชน์แม้ไม่ปรุงแต่งความหวานกับ คิคโคแมน นมถั่วเหลือง สูตรไม่หวาน ใช้นมถั่วเหลืองแท้ 100% จึงให้ความอร่อยและประโยชน์อย่างเต็มเปี่ยม อีกหนึ่งทางเลือกสำหรับคนที่ให้ความสำคัญกับการดูแลสุขภาพ เพราะคิคโคแมน นมถั่วเหลือง สูตรไม่หวานกล่องนี้ ให้พลังงานเพียง 110 กิโลแคลอรี แถมยังมีปริมาณไขมันต่ำอีกด้วย ',img:'https://static.wixstatic.com/media/c8a905_cfa1590496ae4504aa228dceaa018cc2~mv2.jpg/v1/fill/w_670,h_446,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c8a905_cfa1590496ae4504aa228dceaa018cc2~mv2.jpg'},
  {product:'137 degrees Almond Milk original unsweetened',cal:90,price:25,ml:'(180 ML)',discription:' นมอัลมอนด์ 137 ตราโฮลี่นัทส์ (Wholly Nuts) สูตรคลีนและลีน เข้มข้นสดราวกับคั้นเองที่บ้าน อัลมอนด์แท้ 100%  แคลอรี่ต่ำเหมาะสำหรับผู้ควบคุมอาหาร มีแคลเซียมสูงเสริมสร้างกระดูก เล็บ และ ฟัน เป็นนมพืชทางเลือกสำหรับผู้แพ้นมวัวและผู้แพ้ถั่วเหลือง ',img:'https://www.gangbeauty.com/uppic/2020-05/17/4b04416aa.jpg'},
  {product:'137 degrees Almond Milk with Avocado',cal:100,price:30,ml:' (180 ML)',discription:'   นมอัลมอนด์ 137 ดีกรี สูตรแครอทและสูตรอโวคาโด ผสมเนื้อผักแท้ ๆ ถึง 7 ชนิด ที่มีประโยชน์ต่อร่างกาย เป็นแหล่งของวิตามิน อาทิ วิตามินอี บำรุงผิวพรรณ ลดไขมันอุดตันในเส้นเลือด แคลเซียม โฟลิก และฟอสฟอรัส และมีใยอาหารจากธรรมชาติ ช่วยให้ร่างกายแข็งแรง อิ่มท้องนาน ไม่หิวบ่อย',img:'https://www.newgreenbox.com/media/catalog/product/cache/8718970de5bfb6f87cb48646a7a79a6c/1/3/137-014.jpg'},
  {product:'Soy milk dina ripe berries Low Sugar',cal:120,price:13,ml:'(230 ML)',discription:'มีส่วนผสมของข้าวไรซ์เบอร์รี่ออร์แกนิค ที่เป็นข้าวจากเกษตรกรไทยด้วยค่ะ ส่วนประกอบก็ตามรูปด้านล่างเลยมีน้ำตาลทราย 3.5% คิดเป็นกรัมก็ประมาณ 8 กรัม ไม่มีคอเรสเตอรอล(ทั้งสองสูตรเลย) 1 ขวดให้พลังงาน 90 กิโลแคลอรีเท่านั้นเองค่ะ ถือว่าให้พลังงานต่ำมากๆ แต่ทานแล้วอยู่ท้องดี รวมๆแล้วดูดีมากค่ะ เหมาะสำหรับคนรักสุขภาพมาก',img:'https://halalthai.or.th/storages/products/p263732.jpg'},
  {product:'Lactasoy original ',cal:140,price:10,ml:'(200 ML)',discription:'ลคตาซอยสูตรต้นตำรับ น้ำนมถั่วเหลืองสูตรสองพลังโปรตีน รวมเอาคุณค่าโปรตีนจากถั่วเหลืองและโปรตีนของนมวัวในรูปของนมผงคุณภาพ เข้าด้วยกันได้อย่างลงตัว ให้คุณได้สัมผัสรสชาติความหอม มัน ของนมผงและยังได้รับคุณค่าทางโภชนาการเต็มที่จากนมถั่วเหลือง ครองใจผู้บริโภคชาวไทย มียอดขายเป็นอันดับหนึ่งต่อเนื่องยาวนานกว่า 30 ปี การดื่มนมถั่วเหลืองอุ่น ๆ ในทุกเช้าจะช่วยเสริมสร้างโปรตีนให้พลังงานแก่ร่างกาย   ดื่มก่อนนอนจะช่วยทำให้นอนหลับสบายยิ่งขึ้น',img:'https://www.lactasoy.com/th/wp-content/uploads/2021/09/300_main_2021_update.jpg'}
  ])

  const id = ref(0)
    function idcard(i){
      id.value = i
    }

    const bookinglist = ref([ ]);
const bookings = (destination) => {
    const item = {
      product:destination.product,
      price:destination.price,
      img:destination.img,
      numproduct:1,
    }

    const findId = bookinglist.value.find(c => c.product == item.product)

        if(findId) {
            const findIndexProduct = bookinglist.value.findIndex(c => c.product == item.product)
            bookinglist.value[findIndexProduct].numproduct = bookinglist.value[findIndexProduct].numproduct + item.numproduct
        } else {
            bookinglist.value.push(item)

        }
    }

//ราคาสินค้ารวม

//คิดแต่ไม่ถึง
const totalprice = computed(()=> {
  return bookinglist.value.reduce((accumulator,currentValue) =>{
    return accumulator+currentValue.price*currentValue.numproduct;
  },0);
})

const totalproduct = computed(()=> {
  return bookinglist.value.reduce((accumulator,currentValue) =>{
    return accumulator+currentValue.numproduct;
  },0);
})


  

return {menulist,idcard,id,bookings,bookinglist,totalprice,totalproduct}
})

