function exportReqEn(obj) {
  const info = {
    logo: require('@/static/image.json').logo,
    reqType: 1,
    place: 'อำเภอเมืองปทุมธานี',
    registryName: 'นาย พนักงาน ทดสอบ',
    date: obj.date,
    qrCode1: obj.qrCode1,
    qrCode2: obj.qrCode2,

    // Personal info
    pid: obj.director.pid,
    identifyDocissue: obj.director.identifyDocissue,
    identifyAa: obj.director.identifyAaDesc,
    identifyCc: obj.director.identifyCcDesc,
    name: obj.director.fullName,
    nation: obj.director.natDescription,
    age: obj.director.age,
    hno: obj.perAddress.hno,
    alley: obj.perAddress.alley,
    soi: obj.perAddress.soi,
    street: obj.perAddress.street,
    tt: obj.perAddress.ttDescription,
    aa: obj.perAddress.aaDescription,
    cc: obj.perAddress.ccDescription,
    tel: obj.perAddress.texNo,
    telNo: obj.perAddress.telNo,

    // Entertainment info
    enType: obj.enInfo.statute,
    enNameT: obj.enInfo.nameTh,
    enNameE: obj.enInfo.nameEn,
    enNo: obj.EnAddress.hno,
    enAlley: obj.EnAddress.alley,
    enSoi: obj.EnAddress.soi,
    enStreet: obj.EnAddress.street,
    enTT: obj.EnAddress.ttDescription,
    enAA: obj.EnAddress.aaDescription,
    enCC: obj.EnAddress.ccDescription,
    enSpace: obj.enInfo.area,
    enRoom: obj.enInfo.roomAmount,
    enTel: obj.EnAddress.texNo,
    enTelNo: obj.EnAddress.telNo,
  }
  const [day, month, year] = info.date.split(' ')
  const docDefinition = {
    pageMargins: [50, 40, 30, 30],
    content: [
      {
        image: info.qrCode1,
        width: 42,
        height: 42,
        absolutePosition: { x: 60, y: 75 },
      },
      {
        image: info.logo,
        width: 70,
        height: 80,
        absolutePosition: { x: 263, y: 42 },
      },
      {
        text: 'แบบ สบ. 1',
        alignment: 'right',
        margin: [0, 25, 40, 10],
      },
      {
        text: 'คำขอรับใบอนุญาตตั้งสถานบริการ',
        alignment: 'center',
        margin: [0, 50, 0, 0],
        fontSize: '23',
        bold: true,
      },
      {
        text: `เขียนที่${'.'.repeat(60)}`,
        alignment: 'right',
        margin: [0, 10, 40, 0],
      },
      {
        text: info.place,
        fontSize: 15,
        relativePosition: { x: 340, y: -22 },
      },
      {
        text: `วันที่${'.'.repeat(20)}เดือน${'.'.repeat(35)}พ.ศ.${'.'.repeat(
          20,
        )}`,
        alignment: 'right',
        margin: [0, 0, 40, 0],
      },
      {
        text: day,
        relativePosition: { x: 260, y: -22 },
      },
      {
        text: month,
        relativePosition: { x: 340, y: -22 },
      },
      {
        text: year,
        relativePosition: { x: 430, y: -22 },
      },
      {
        text: `1.ข้าพเจ้า      (กรณีบุคคลธรรมดา)${'.'.repeat(
          40,
        )}สัญชาติ${'.'.repeat(20)}อายุ${'.'.repeat(10)}ปี`,
        margin: [90, 0, 0, 0],
      },
      {
        text: info.reqType == 1 ? '√' : '',
        relativePosition: { x: 138, y: -22 },
      },
      {
        text: info.reqType == 1 ? info.name : '',
        fontSize: '15',
        relativePosition: { x: 240, y: -22 },
      },
      {
        text: info.reqType == 1 ? info.nation : '',
        relativePosition: { x: 376, y: -22 },
      },
      {
        text: info.reqType == 1 ? info.age : '',
        relativePosition: { x: 445, y: -22 },
      },
      {
        table: {
          heights: 15,
          widths: [8],
          body: [[' ']],
        },
        layout: {
          paddingTop: function () {
            return -4
          },
          paddingBottom: function () {
            return -3
          },
          paddingLeft: function () {
            return 2.3
          },
          paddingRight: function () {
            return 2.3
          },
          hLineWidth: function () {
            return 0.2
          },
          vLineWidth: function () {
            return 0.2
          },
        },
        absolutePosition: { x: 185, y: 223 },
      },
      {
        text: `เลขประจำตัวประชาชน${'.'.repeat(
          45,
        )}หรือใบสำคัญประจำตัวคนต่างด้าวเลขที่${'.'.repeat(25)}`,
        margin: [30, 0, 40, 0],
      },
      {
        text: info.reqType == 1 ? info.pid : '',
        relativePosition: { x: 130, y: -22 },
      },
      {
        text: `ออกให้ ณ${'.'.repeat(40)}อำเภอ/เขต${'.'.repeat(
          45,
        )}จังหวัด${'.'.repeat(41)}`,
        margin: [30, 0, 40, 0],
      },
      {
        text: info.reqType == 1 ? info.identifyDocissue : '',
        relativePosition: { x: 80, y: -22 },
      },
      {
        text: info.reqType == 1 ? info.identifyAa : '',
        relativePosition: { x: 230, y: -22 },
      },
      {
        text: info.reqType == 1 ? info.identifyCc : '',
        relativePosition: { x: 380, y: -22 },
      },
      {
        text: `อยู่บ้านเลขที่${'.'.repeat(30)}ตรอก/ซอย${'.'.repeat(
          45,
        )}ถนน${'.'.repeat(50)}`,
        margin: [30, 0, 40, 0],
      },
      {
        text: info.reqType == 1 ? info.hno : '',
        relativePosition: { x: 90, y: -22 },
      },
      {
        text: info.soi ? info.soi : info.alley,
        relativePosition: { x: 215, y: -22 },
      },
      {
        text: info.reqType == 1 ? info.street : '',
        relativePosition: { x: 360, y: -22 },
      },
      {
        text: `ตำบล/แขวง${'.'.repeat(40)}อำเภอ/เขต${'.'.repeat(
          42,
        )}จังหวัด${'.'.repeat(40)}`,
        margin: [30, 0, 40, 0],
      },
      {
        text: info.reqType == 1 ? info.tt : '',
        relativePosition: { x: 90, y: -22 },
      },
      {
        text: info.reqType == 1 ? info.aa : '',
        relativePosition: { x: 240, y: -22 },
      },
      {
        text: info.reqType == 1 ? info.cc : '',
        relativePosition: { x: 380, y: -22 },
      },
      {
        text: `เลขหมายโทรศัพท์พื้นฐาน${'.'.repeat(
          45,
        )}เลขหมายโทรศัพท์เคลื่อนที่${'.'.repeat(41)}`,
        margin: [30, 0, 40, 0],
      },
      {
        text: info.reqType == 1 ? info.tel : '',
        relativePosition: { x: 145, y: -22 },
      },
      {
        text: info.reqType == 1 ? info.telNo : '',
        relativePosition: { x: 380, y: -22 },
      },
      {
        text: `(กรณีนิติบุคคล)${'.'.repeat(111)}`,
        margin: [120, 0, 0, 0],
      },
      {
        table: {
          heights: 15,
          widths: [8],
          body: [[' ']],
        },
        layout: {
          paddingTop: function () {
            return -4
          },
          paddingBottom: function () {
            return -3
          },
          paddingLeft: function () {
            return 2.3
          },
          paddingRight: function () {
            return 2.3
          },
          hLineWidth: function () {
            return 0.2
          },
          vLineWidth: function () {
            return 0.2
          },
        },
        absolutePosition: { x: 146, y: 340 },
      },
      {
        text: info.reqType == 2 ? '√' : '',
        relativePosition: { x: 100, y: -20 },
      },
      {
        text: info.reqType == 2 ? info.bName : '',
        relativePosition: { x: 200, y: -22 },
      },
      {
        text: `จดทะเบียนเป็นนิติบุคคลทะเบียนเลขที่${'.'.repeat(
          48,
        )}เมื่อวันที่${'.'.repeat(28)}ณ${'.'.repeat(17)}`,
        margin: [30, 0, 40, 0],
      },
      {
        text: info.reqType == 2 ? info.bID : '',
        relativePosition: { x: 200, y: -22 },
      },
      {
        text: info.reqType == 2 ? info.bCreateDate : '',
        relativePosition: { x: 355, y: -22 },
      },
      {
        text: info.reqType == 2 ? info.bRegistery : '',
        relativePosition: { x: 435, y: -22 },
      },
      {
        text: `สำนักงานแห่งใหญ่ตั้งอยู่เลขที่${'.'.repeat(
          25,
        )}ตรอก/ซอย${'.'.repeat(40)}ถนน${'.'.repeat(33)}`,
        margin: [30, 0, 40, 0],
      },
      {
        text: info.reqType == 2 ? info.bNo : '',
        relativePosition: { x: 160, y: -22 },
      },
      {
        text: info.reqType == 2 ? info.bSoi : '',
        relativePosition: { x: 270, y: -22 },
      },
      {
        text: info.reqType == 2 ? info.bStreet : '',
        relativePosition: { x: 390, y: -22 },
      },
      {
        text: `ตำบล/แขวง${'.'.repeat(40)}อำเภอ/เขต${'.'.repeat(
          42,
        )}จังหวัด${'.'.repeat(40)}`,
        margin: [30, 0, 40, 0],
      },
      {
        text: info.reqType == 2 ? info.bTT : '',
        relativePosition: { x: 90, y: -22 },
      },
      {
        text: info.reqType == 2 ? info.bAA : '',
        relativePosition: { x: 250, y: -22 },
      },
      {
        text: info.reqType == 2 ? info.bCC : '',
        relativePosition: { x: 370, y: -22 },
      },
      {
        text: `โดย${'.'.repeat(
          70,
        )}ผู้แทนของนิติบุคคลผู้ขออนุญาต สัญชาติ${'.'.repeat(30)}`,
        margin: [30, 0, 40, 0],
      },
      {
        text: info.reqType == 2 ? info.bRegisName : '',
        relativePosition: { x: 55, y: -22 },
      },
      {
        text: info.reqType == 2 ? info.RegisNation : '',
        relativePosition: { x: 405, y: -22 },
      },
      {
        text: `อายุ${'.'.repeat(20)}ปี เลขประจำตัวประชาชน${'.'.repeat(
          65,
        )}หรือใบสำคัญประจำตัว`,
        margin: [30, 0, 40, 0],
      },
      {
        text: info.reqType == 2 ? info.RegisAge : '',
        relativePosition: { x: 55, y: -22 },
      },
      {
        text: info.reqType == 2 ? info.pid : '',
        relativePosition: { x: 220, y: -22 },
      },
      {
        text: `คนต่างด้าวเลขที่${'.'.repeat(20)}ออกให้ ณ${'.'.repeat(
          25,
        )}อำเภอ/เขต${'.'.repeat(25)}จังหวัด${'.'.repeat(29)}`,
        margin: [30, 0, 40, 0],
      },
      {
        text: `อยู่บ้านเลขที่${'.'.repeat(30)}ตรอก/ซอย${'.'.repeat(
          45,
        )}ถนน${'.'.repeat(50)}`,
        margin: [30, 0, 40, 0],
      },
      {
        text: `ตำบล/แขวง${'.'.repeat(40)}อำเภอ/เขต${'.'.repeat(
          42,
        )}จังหวัด${'.'.repeat(40)}`,
        margin: [30, 0, 40, 0],
      },
      {
        text: `เลขหมายโทรศัพท์พื้นฐาน${'.'.repeat(
          45,
        )}เลขหมายโทรศัพท์เคลื่อนที่${'.'.repeat(41)}`,
        margin: [30, 0, 40, 0],
      },
      {
        text: `2.ข้าพเจ้าขอยื่นคำขอต่อ${'.'.repeat(82)}ซึ่งเป็นพนักงาน`,
        margin: [90, 0, 0, 0],
      },
      {
        text: info.reqType == 1 ? info.registryName : '',
        relativePosition: { x: 210, y: -22 },
      },
      {
        text: 'เจ้าหน้าที่ตามพระราชบัญญัติสถานบริการ พ.ศ. 2509 เพื่อตั้งสถานบริการตาม',
        margin: [30, 0, 0, 0],
      },
      {
        text: 'มาตรา 3(1)       (2)       (3)       (4)       (5)       ',
        margin: [90, 0, 0, 0],
      },
      {
        table: {
          heights: 15,
          widths: [8],
          body: [[' ']],
        },
        layout: {
          paddingTop: function () {
            return -4
          },
          paddingBottom: function () {
            return -3
          },
          paddingLeft: function () {
            return 2.3
          },
          paddingRight: function () {
            return 2.3
          },
          hLineWidth: function () {
            return 0.2
          },
          vLineWidth: function () {
            return 0.2
          },
        },
        absolutePosition: { x: 197, y: 572 },
      },
      {
        text: info.enType == 1 ? '√' : '',
        relativePosition: { x: 150, y: -20 },
      },
      {
        table: {
          heights: 15,
          widths: [8],
          body: [[' ']],
        },
        layout: {
          paddingTop: function () {
            return -4
          },
          paddingBottom: function () {
            return -3
          },
          paddingLeft: function () {
            return 2.3
          },
          paddingRight: function () {
            return 2.3
          },
          hLineWidth: function () {
            return 0.2
          },
          vLineWidth: function () {
            return 0.2
          },
        },
        absolutePosition: { x: 235, y: 572 },
      },
      {
        text: info.enType == 2 ? '√' : '',
        relativePosition: { x: 188, y: -20 },
      },
      {
        table: {
          heights: 15,
          widths: [8],
          body: [[' ']],
        },
        layout: {
          paddingTop: function () {
            return -4
          },
          paddingBottom: function () {
            return -3
          },
          paddingLeft: function () {
            return 2.3
          },
          paddingRight: function () {
            return 2.3
          },
          hLineWidth: function () {
            return 0.2
          },
          vLineWidth: function () {
            return 0.2
          },
        },
        absolutePosition: { x: 272, y: 572 },
      },
      {
        text: info.enType == 3 ? '√' : '',
        relativePosition: { x: 225, y: -20 },
      },
      {
        table: {
          heights: 15,
          widths: [8],
          body: [[' ']],
        },
        layout: {
          paddingTop: function () {
            return -4
          },
          paddingBottom: function () {
            return -3
          },
          paddingLeft: function () {
            return 2.3
          },
          paddingRight: function () {
            return 2.3
          },
          hLineWidth: function () {
            return 0.2
          },
          vLineWidth: function () {
            return 0.2
          },
        },
        absolutePosition: { x: 309, y: 572 },
      },
      {
        text: info.enType == 4 ? '√' : '',
        relativePosition: { x: 262, y: -20 },
      },
      {
        table: {
          heights: 15,
          widths: [8],
          body: [[' ']],
        },
        layout: {
          paddingTop: function () {
            return -4
          },
          paddingBottom: function () {
            return -3
          },
          paddingLeft: function () {
            return 2.3
          },
          paddingRight: function () {
            return 2.3
          },
          hLineWidth: function () {
            return 0.2
          },
          vLineWidth: function () {
            return 0.2
          },
        },
        absolutePosition: { x: 346, y: 572 },
      },
      {
        text: info.enType == 5 ? '√' : '',
        relativePosition: { x: 299, y: -20 },
      },
      {
        text: `โดยใช้ชื่อสถานบริการภาษาไทยว่า${'.'.repeat(115)}`,
        margin: [30, 0, 0, 0],
      },
      {
        text: info.enNameT,
        relativePosition: { x: 180, y: -22 },
      },
      {
        text: `ภาษาต่างประเทศ(ถ้ามี)ว่า${'.'.repeat(128)}`,
        margin: [30, 0, 0, 0],
      },
      {
        text: info.enNameE,
        relativePosition: { x: 170, y: -22 },
      },
      {
        text: `ตั้งอยู่ ณ เลขที่${'.'.repeat(26)}ตรอก/ซอย${'.'.repeat(
          45,
        )}ถนน${'.'.repeat(50)}`,
        margin: [30, 0, 40, 0],
      },
      {
        text: info.enNo,
        relativePosition: { x: 110, y: -22 },
      },
      {
        text: info.enSoi ? info.enSoi : info.enAlley,
        relativePosition: { x: 210, y: -22 },
      },
      {
        text: info.enStreet,
        relativePosition: { x: 350, y: -22 },
      },
      {
        text: `ตำบล/แขวง${'.'.repeat(40)}อำเภอ/เขต${'.'.repeat(
          42,
        )}จังหวัด${'.'.repeat(39)}`,
        margin: [30, 0, 40, 0],
      },
      {
        text: info.enTT,
        relativePosition: { x: 110, y: -22 },
      },
      {
        text: info.enAA,
        relativePosition: { x: 250, y: -22 },
      },
      {
        text: info.enCC,
        relativePosition: { x: 380, y: -22 },
      },
      {
        text: `เลขหมายโทรศัพท์พื้นฐาน${'.'.repeat(
          45,
        )}เลขหมายโทรศัพท์เคลื่อนที่${'.'.repeat(41)}`,
        margin: [30, 0, 40, 0],
      },
      {
        text: info.enTel,
        relativePosition: { x: 155, y: -22 },
      },
      {
        text: info.enTelNo,
        relativePosition: { x: 380, y: -22 },
      },
      {
        text: '3.ข้าพเจ้ามีคุณสมบัติครบถ้วนตามมาตรา 6 แห่งพระราชบัญญัติสถานบริการ',
        margin: [90, 0, 0, 0],
        characterSpacing: 0.9,
      },
      {
        text: 'พ.ศ.2509 และไม่มีลักษณะต้องห้ามตามที่กำหนดในกฎกระทรวง และอาคารหรือสถานที่ที่ขออนุญาต',
        margin: [30, 0, 0, 0],
        characterSpacing: 0.2,
      },
      {
        text: 'เป็นไปตามมาตรา7แห่งพระราชบัญญัติสถานบริการ พ.ศ.2509 รวมทั้งที่กำหนดในกฎกระทรวง',
        margin: [30, 0, 0, 0],
        characterSpacing: 0.5,
      },
      {
        text: '/-2-',
        alignment: 'right',
        margin: [30, 30, 50, 0],
      },
      {
        text: 'แบบ สบ. 1',
        pageBreak: 'before',
        alignment: 'right',
        margin: [0, 25, 40, 10],
      },
      {
        text: '-2-',
        alignment: 'center',
        margin: [30, 0, 50, 0],
      },
      {
        image: info.qrCode2,
        width: 42,
        height: 42,
        absolutePosition: { x: 60, y: 75 },
      },
      {
        text: '4.ข้าพเจ้ารับทราบถึงหน้าที่ที่ผู้รับอนุญาตตั้งสถานบริการจะต้องถือปฏิบัตอ ตลอดจน',
        margin: [90, 30, 0, 0],
        characterSpacing: 0.4,
      },
      {
        text: 'บทลงโทษตามพระราชบัญญัติสถานบริการ พ.ศ.2509 รวมทั้งกฎกระทรวงและประกาศกระทรวง',
        margin: [30, 0, 0, 0],
        characterSpacing: 0.5,
      },
      {
        text: 'ที่เกี่ยวข้องแล้ว',
        margin: [30, 0, 0, 0],
        characterSpacing: 0.5,
      },
      {
        text: '5.พร้อมกับคำขอนี้ข้าพเจ้าได้แนบหลักฐานต่างๆมาด้วยแล้ว คือ',
        margin: [90, 0, 0, 0],
      },
      {
        text: '(1) สำเนาบัตรประจำตัวประชาชน และสำเนาทะเบียนบ้าน พร้อมลงลายมือชื่อ',
        margin: [90, 0, 0, 0],
        characterSpacing: 0.8,
      },
      {
        text: 'รับรองสำเนาจำนวนสองชุด',
        margin: [30, 0, 0, 0],
      },
      {
        text: '(2) ใบรับรองแพทย์แผนปัจจุบันชั้น 1 รับรองว่าผู้ขออนุญาตมีคุณสมบัติตาม',
        margin: [90, 0, 0, 0],
        characterSpacing: 0.9,
      },
      {
        text: 'มาตรา 6(3) และ (4) จำนวนหนึ่งฉบับ',
        margin: [30, 0, 0, 0],
      },
      {
        text: '(3) แบบแปลนแผนผังแสดงพื้นที่การให้บริการของสุถานบริการและปริมณฑล',
        margin: [90, 0, 0, 0],
        characterSpacing: 0.8,
      },
      {
        text: 'ของสถานบริการแสดงรายละเอียดต่างๆ ภายในสถานบริการ เช่น บริเวณเวที บริเวณ',
        margin: [30, 0, 0, 0],
        characterSpacing: 0.9,
      },
      {
        text: 'ของผู้ใช้บริการ ห้องส้วม ห้องครัว ประตูทางเข้า ทางออก เป็นต้น มาตราส่วนไม่เล็กกว่า 1',
        margin: [30, 0, 0, 0],
        characterSpacing: 0.8,
      },
      {
        text: 'ใน 500 พร้อมทั้งคำนวณปริมาณพื้นที่ที่ขออนุญาตตั้งสถานบริการ และลงลายมือชื่อรับรอง',
        margin: [30, 0, 0, 0],
        characterSpacing: 0.7,
      },
      {
        text: 'จำนวนสองชุด',
        margin: [30, 0, 0, 0],
      },
      {
        text: '(4) แผนที่สังเขปแสดงบริเวณที่ตั้งสถานบริการพร้อมลงลายมือชื่อรับรอง จำนวน',
        margin: [90, 0, 0, 0],
        characterSpacing: 0.7,
      },
      {
        text: 'สองฉบับ',
        margin: [30, 0, 0, 0],
      },
      {
        text: '(5) หลักฐานที่แสดงว่าอาคารสถานที่ตั้งสถานบริการได้รับอนุญาตให้ใช้อาคาร',
        margin: [90, 0, 0, 0],
        characterSpacing: 0.7,
      },
      {
        text: 'ตามระราชบัญญัติควบคุมอาคาร พ.ศ. 2522 หรือใบรับรองการตรวจสอบสภาพอาคาร',
        margin: [30, 0, 0, 0],
        characterSpacing: 0.9,
      },
      {
        text: 'โดยผู้ซึ่งได้รับใบอนุญาตประกอบวิชาชีพวิศวกรรมควบคุม หรือผู้ซึ่งได้รับใบอนุญาตประกอบ',
        margin: [30, 0, 0, 0],
        characterSpacing: 0.7,
      },
      {
        text: 'วิชาชีพสถาปัตยกรรมควบคุมตามกฎหมายว่าด้วยการนั้น',
        margin: [30, 0, 0, 0],
      },
      {
        text: '(6) รูปถ่ายของผู้อนุญาตตั้งสถานบริการหรือผู้แทนของนิติบุคคลผู้ขออนุญาต',
        margin: [90, 0, 0, 0],
        characterSpacing: 0.8,
      },
      {
        text: 'ตั้งสถานบริการ ซึ่งต้องเป็นกรรมการหรือบุคคลผู้มีอำนาจลงนามผูกพันนิติบุคคล หน้าตรง',
        margin: [30, 0, 0, 0],
        characterSpacing: 0.9,
      },
      {
        text: 'ไม่สวมหมวก ไม่ใส่แว่นตาสีดำ ขนาก 4x6 เซนติเมตร จำนวนสามรูป',
        margin: [30, 0, 0, 0],
      },
      {
        text: '(7) สำเนาหนังสือรับรองการจดทะเบียนเป็นนิติบุคคล วัตถุประสงค์ และผู้มีอำนาจ',
        margin: [90, 0, 0, 0],
        characterSpacing: 0.7,
      },
      {
        text: 'ลงชื่อแทนนิติบุคคลผู้ขออนุญาตตั้งสถานบริการ ไม่เกินสามเดือน จำนวนหนึ่งฉบับ',
        margin: [30, 0, 0, 0],
      },
      {
        text: '[กรณีนิติบุคคลเป็นผู้ขออนุญาตตั้งสถานบริการ]',
        alignment: 'center',
      },
      {
        text: '(8) หนังสือตั้งผู้แทนนิติบุคคลซึ่งต้องเป็นกรรมการหรือบุคคลผู้มีอำนาจลงนาม',
        margin: [90, 0, 0, 0],
        characterSpacing: 0.8,
      },
      {
        text: 'ผูกพันนิติบุคคล',
        margin: [30, 0, 0, 0],
      },
      {
        text: '(9) หนังสือแสดงความยินยอมของเจ้าของอาคารหรือสถานที่ตั้งสถานบริการ',
        margin: [90, 0, 0, 0],
        characterSpacing: 0.9,
      },
      {
        text: 'ในกรณีที่ผู้ขออนุญาตตั้งสถานบริการไม่ใช่เจ้าของอาคารหรือสถานที่ที่ตั้งสถานบริการจำนวน',
        margin: [30, 0, 0, 0],
        characterSpacing: 0.8,
      },
      {
        text: 'หนึ่งฉบับ',
        margin: [30, 0, 0, 0],
      },
      {
        text: info.name,
        relativePosition: { x: 255, y: 47 },
      },
      {
        layout: 'noBorders',
        table: {
          body: [
            [
              {
                text: `(ลายมือชื่อ)${'.'.repeat(55)}ผู้ขออนุญาต\n(${'.'.repeat(
                  55,
                )})`,
                alignment: 'center',
              },
            ],
          ],
        },
        margin: [190, 30, 0, 0],
      },
    ],
    defaultStyle: require('@/plugins/pdfmake-style').default.defaultStyleH(),
  }

  const pdfDocGenerator = pdfMake.createPdf(docDefinition)
  pdfDocGenerator.getBlob(function (blob) {
    const pdfPreview = document.getElementById('pdfPreview')
    if (pdfPreview) {
      pdfPreview.remove()
    }
    const iframe = document.createElement('iframe')
    iframe.id = 'pdfPreview'
    iframe.style.display = 'none'
    iframe.src = URL.createObjectURL(blob)
    document.body.appendChild(iframe)
    iframe.contentWindow.focus()
    iframe.contentWindow.print()
  })
}

// ! --------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------- สบ. 2 -------------------------------------------------------------------------
// ! --------------------------------------------------------------------------------------------------------------------------------

function exportRecEn(obj) {
  const info = {
    logo: require('@/static/image.json').logo,
    qrCode: obj.qrCode,
    date: obj.license.licDateFormat,
    docType: 1,
    reqType: 1,
    registryName: 'นาย พนักงาน ทดสอบ',
    registryPosition: 'นายทะเบียน',
    licId: obj.licId,
    licYear: obj.licYear,

    // Personal info
    pid: obj.director.pid,
    name: obj.director.fullName,
    nation: obj.director.natDescription,
    age: obj.director.age,
    hno: obj.perAddress.hno,
    alley: obj.perAddress.alley,
    soi: obj.perAddress.soi,
    street: obj.perAddress.street,
    tt: obj.perAddress.ttDescription,
    aa: obj.perAddress.aaDescription,
    cc: obj.perAddress.ccDescription,
    tel: obj.perAddress.texNo,
    telNo: obj.perAddress.telNo,
    
    // Entertainment info
    enType: obj.enInfo.statute,
    enNameT: obj.enInfo.nameTh,
    enNameE: obj.enInfo.nameEn,
    enNo: obj.EnAddress.hno,
    enAlley: obj.EnAddress.alley,
    enSoi: obj.EnAddress.soi,
    enStreet: obj.EnAddress.street,
    enTT: obj.EnAddress.ttDescription,
    enAA: obj.EnAddress.aaDescription,
    enCC: obj.EnAddress.ccDescription,
    enTel: obj.EnAddress.texNo,
    enTelNo: obj.EnAddress.telNo,
    enSpace: obj.enInfo.area,
    enRoom: obj.enInfo.roomAmount,
    enBed: obj.enInfo.bedAmount,
    enOpen: obj.enInfo.enOpen,
  }
  const [day, month, year] = info.date.split(' ')
  const docDefination = {
    pageMargins: [50, 40, 30, 30],
    content: [
      {
        image: info.qrCode,
        width: 42,
        height: 42,
        absolutePosition: { x: 60, y: 75 },
      },
      {
        image: info.logo,
        width: 70,
        height: 80,
        absolutePosition: { x: 50, y: 60 },
        alignment: 'center',
      },
      {
        text: 'แบบ สบ. 2',
        alignment: 'right',
        margin: [0, 25, 40, 10],
      },
      {
        table: {
          widths: [90],
          body: [
            [
              {
                text: 'ที่ปิดรูปถ่าย\nผู้รับอนุญาตหรือ\nผู้แทนนิติบุคคล\nผู้รับอนุญาต\nขนาด 4x6 ซม.',
                fontSize: 14,
                lineHeight: 1.1,
                alignment: 'center',
                margin: [0, 8, 0, 8],
              },
            ],
          ],
        },
        layout: {
          paddingTop: function (i, node) {
            return 5
          },
          paddingBottom: function (i, node) {
            return 7
          },
          hLineWidth: function () {
            return 0.2
          },
          vLineWidth: function () {
            return 0.2
          },
        },
        margin: [380, 0, 0, 0],
      },
      {
        text: `ใบอนุญาต\nให้ตั้งสถานบริการ\nประจำปี พุทธศักราช ${year}`,
        alignment: 'center',
        margin: [0, -60, 0, 0],
        fontSize: '16',
        bold: true,
      },
      {
        text: `เลขที่${'.'.repeat(15)}/${'.'.repeat(15)}`,
        alignment: 'left',
        margin: [50, 0, 0, 0],
      },
      {
        text: info.licId ? info.licId : '',
        relativePosition: { x: 78, y: -22 },
      },
      {
        text: info.licYear ? info.licYear : '',
        relativePosition: { x: 120, y: -22 },
      },
      {
        text: 'อาศัยอำนาจตามความในมาตรา 4 แห่งพระราชบัญญัติสถานบริการ พ.ศ.2509 อนุญาตให้',
        margin: [50, 0, 0, 0],
      },
      {
        text: `(กรณีเป็นบุคคลธรรมดา)${'.'.repeat(60)}สัญชาติ${'.'.repeat(43)}`,
        margin: [70, 0, 0, 0],
      },
      {
        table: {
          heights: 15,
          widths: [8],
          body: [[' ']],
        },
        layout: {
          paddingTop: function () {
            return -4
          },
          paddingBottom: function () {
            return -3
          },
          paddingLeft: function () {
            return 2.3
          },
          paddingRight: function () {
            return 2.3
          },
          hLineWidth: function () {
            return 0.2
          },
          vLineWidth: function () {
            return 0.2
          },
        },
        relativePosition: { x: 52, y: -15 },
      },
      {
        text: info.reqType == 1 ? '√' : '',
        relativePosition: { x: 55, y: -19 },
      },
      {
        text: info.reqType == 1 ? info.name : '',
        relativePosition: { x: 185, y: -22 },
      },
      {
        text: info.reqType == 1 ? info.nation : '',
        relativePosition: { x: 380, y: -22 },
      },
      {
        text: `อายุ${'.'.repeat(15)}ปี เลขบัตรประจำตัวประชาชน${'.'.repeat(
          60,
        )}อยู่บ้านเลขที่${'.'.repeat(31)}`,
        margin: [0, 0, 0, 0],
      },
      {
        text: info.reqType == 1 ? info.age : '',
        relativePosition: { x: 30, y: -22 },
      },
      {
        text: info.reqType == 1 ? info.pid : '',
        relativePosition: { x: 190, y: -22 },
      },
      {
        text: info.reqType == 1 ? info.hno : '',
        relativePosition: { x: 400, y: -22 },
      },
      {
        text: `ตรอก/ซอย${'.'.repeat(35)}ถนน${'.'.repeat(
          45,
        )}ตำบล/แขวง${'.'.repeat(57)}`,
        margin: [0, 0, 0, 0],
      },
      {
        text: info.alley ? info.alley : info.soi,
        relativePosition: { x: 55, y: -22 },
      },
      {
        text: info.reqType == 1 ? info.street : '',
        relativePosition: { x: 165, y: -22 },
      },
      {
        text: info.reqType == 1 ? info.tt : '',
        relativePosition: { x: 340, y: -22 },
      },
      {
        text: `อำเภอ/เขต${'.'.repeat(45)}จังหวัด${'.'.repeat(60)}`,
        margin: [0, 0, 0, 0],
      },
      {
        text: info.reqType == 1 ? info.aa : '',
        relativePosition: { x: 55, y: -22 },
      },
      {
        text: info.reqType == 1 ? info.cc : '',
        relativePosition: { x: 200, y: -22 },
      },
      {
        text: `(กรณีเป็นนิติบุคคล)${'.'.repeat(123)}`,
        margin: [70, 0, 0, 0],
      },
      {
        table: {
          heights: 15,
          widths: [8],
          body: [[' ']],
        },
        layout: {
          paddingTop: function () {
            return -4
          },
          paddingBottom: function () {
            return -3
          },
          paddingLeft: function () {
            return 2.3
          },
          paddingRight: function () {
            return 2.3
          },
          hLineWidth: function () {
            return 0.2
          },
          vLineWidth: function () {
            return 0.2
          },
        },
        relativePosition: { x: 52, y: -15 },
      },
      {
        text: info.reqType == 2 ? '√' : '',
        relativePosition: { x: 55, y: -19 },
      },
      {
        text: '',
        relativePosition: { x: 170, y: -22 },
      },
      {
        text: `จดทะเบียนเป็นนิติบุคคลทะเบียนเลขที่${'.'.repeat(
          45,
        )}เมื่อวันที่${'.'.repeat(8)}เดือน${'.'.repeat(23)}พ.ศ.${'.'.repeat(
          14,
        )}`,
        margin: [0, 0, 0, 0],
      },
      {
        text: '',
        relativePosition: { x: 165, y: -22 },
      },
      {
        text: '',
        relativePosition: { x: 320, y: -22 },
      },
      {
        text: '',
        relativePosition: { x: 360, y: -22 },
      },
      {
        text: '',
        relativePosition: { x: 438, y: -22 },
      },
      {
        text: `ณ${'.'.repeat(50)}สำนักงานแห่งใหญ่ตั้งอยู่เลขที่${'.'.repeat(
          20,
        )}ตรอก/ซอย${'.'.repeat(43)}`,
        margin: [0, 0, 0, 0],
      },
      {
        text: '',
        relativePosition: { x: 20, y: -22 },
      },
      {
        text: '',
        relativePosition: { x: 270, y: -22 },
      },
      {
        text: '',
        relativePosition: { x: 370, y: -22 },
      },
      {
        text: `ถนน${'.'.repeat(30)}ตำบล/แขวง${'.'.repeat(
          30,
        )}อำเภอ/เขต${'.'.repeat(30)}จังหวัด${'.'.repeat(35)}`,
        margin: [0, 0, 0, 0],
      },
      {
        text: '',
        relativePosition: { x: 35, y: -22 },
      },
      {
        text: '',
        relativePosition: { x: 170, y: -22 },
      },
      {
        text: '',
        relativePosition: { x: 280, y: -22 },
      },
      {
        text: '',
        relativePosition: { x: 390, y: -22 },
      },
      {
        text: `โดย${'.'.repeat(
          50,
        )}ผู้แทนของนิติบุคคลผู้รับอนุญาตสัญชาติ${'.'.repeat(
          37,
        )}อายุ${'.'.repeat(15)}ปี`,
        margin: [0, 0, 0, 0],
      },
      {
        text: '',
        relativePosition: { x: 35, y: -22 },
      },
      {
        text: '',
        relativePosition: { x: 340, y: -22 },
      },
      {
        text: '',
        relativePosition: { x: 430, y: -22 },
      },
      {
        text: 'ตั้งสถานบริการตามมาตรา 3(1)       (2)       (3)       (4)       (5)       ',
        margin: [0, 0, 0, 0],
      },
      {
        table: {
          heights: 15,
          widths: [8],
          body: [[' ']],
        },
        layout: {
          paddingTop: function () {
            return -4
          },
          paddingBottom: function () {
            return -3
          },
          paddingLeft: function () {
            return 2.3
          },
          paddingRight: function () {
            return 2.3
          },
          hLineWidth: function () {
            return 0.2
          },
          vLineWidth: function () {
            return 0.2
          },
        },
        relativePosition: { x: 138, y: -15 },
      },
      {
        text: info.enType == 1 ? '√' : '',
        relativePosition: { x: 141, y: -19 },
      },
      {
        table: {
          heights: 15,
          widths: [8],
          body: [[' ']],
        },
        layout: {
          paddingTop: function () {
            return -4
          },
          paddingBottom: function () {
            return -3
          },
          paddingLeft: function () {
            return 2.3
          },
          paddingRight: function () {
            return 2.3
          },
          hLineWidth: function () {
            return 0.2
          },
          vLineWidth: function () {
            return 0.2
          },
        },
        relativePosition: { x: 175, y: -15 },
      },
      {
        text: info.enType == 2 ? '√' : '',
        relativePosition: { x: 178, y: -19 },
      },
      {
        table: {
          heights: 15,
          widths: [8],
          body: [[' ']],
        },
        layout: {
          paddingTop: function () {
            return -4
          },
          paddingBottom: function () {
            return -3
          },
          paddingLeft: function () {
            return 2.3
          },
          paddingRight: function () {
            return 2.3
          },
          hLineWidth: function () {
            return 0.2
          },
          vLineWidth: function () {
            return 0.2
          },
        },
        relativePosition: { x: 212, y: -15 },
      },
      {
        text: info.enType == 3 ? '√' : '',
        relativePosition: { x: 215, y: -19 },
      },
      {
        table: {
          heights: 15,
          widths: [8],
          body: [[' ']],
        },
        layout: {
          paddingTop: function () {
            return -4
          },
          paddingBottom: function () {
            return -3
          },
          paddingLeft: function () {
            return 2.3
          },
          paddingRight: function () {
            return 2.3
          },
          hLineWidth: function () {
            return 0.2
          },
          vLineWidth: function () {
            return 0.2
          },
        },
        relativePosition: { x: 250, y: -15 },
      },
      {
        text: info.enType == 4 ? '√' : '',
        relativePosition: { x: 253, y: -19 },
      },
      {
        table: {
          heights: 15,
          widths: [8],
          body: [[' ']],
        },
        layout: {
          paddingTop: function () {
            return -4
          },
          paddingBottom: function () {
            return -3
          },
          paddingLeft: function () {
            return 2.3
          },
          paddingRight: function () {
            return 2.3
          },
          hLineWidth: function () {
            return 0.2
          },
          vLineWidth: function () {
            return 0.2
          },
        },
        relativePosition: { x: 288, y: -15 },
      },
      {
        text: info.enType == 5 ? '√' : '',
        relativePosition: { x: 291, y: -19 },
      },
      {
        text: `โดยใช้ชื่อสถานบริการภาษาไทยว่า${'.'.repeat(125)}`,
        margin: [0, 0, 0, 0],
      },
      {
        text: info.enNameT,
        relativePosition: { x: 160, y: -22 },
      },
      {
        text: `ภาษาต่างประเทศ(ถ้ามี)ว่า${'.'.repeat(138)}`,
        margin: [0, 0, 0, 0],
      },
      {
        text: info.enNameE,
        relativePosition: { x: 160, y: -22 },
      },
      {
        text: `ตั้งอยู่ ณ เลขที่${'.'.repeat(30)}ตรอก/ซอย${'.'.repeat(
          50,
        )}ถนน${'.'.repeat(51)}`,
        margin: [0, 0, 0, 0],
      },
      {
        text: info.enNo,
        relativePosition: { x: 80, y: -22 },
      },
      {
        text: info.enSoi,
        relativePosition: { x: 200, y: -22 },
      },
      {
        text: info.enStreet,
        relativePosition: { x: 350, y: -22 },
      },
      {
        text: `ตำบล/แขวง${'.'.repeat(40)}อำเภอ/เขต${'.'.repeat(
          45,
        )}จังหวัด${'.'.repeat(46)}`,
        margin: [0, 0, 0, 0],
      },
      {
        text: info.enTT,
        relativePosition: { x: 70, y: -22 },
      },
      {
        text: info.enAA,
        relativePosition: { x: 215, y: -22 },
      },
      {
        text: info.enCC,
        relativePosition: { x: 360, y: -22 },
      },
      {
        table: {
          widths: [450],
          body: [
            [
              {
                text: 'ในเขตอันมีปริมณฑลจำกัดเพื่อการอนุญาตให้ตั้งสถานบริการ\nนอกเขตอันมีปริมณฑลจำกัดเพื่อการอนุญาตให้ตั้งสถานบริการ',
                fontSize: 14,
                lineHeight: 1.1,
                alignment: 'left',
                margin: [25, 0, 0, 0],
              },
            ],
          ],
        },
        layout: {
          paddingTop: function (i, node) {
            return 5
          },
          paddingBottom: function (i, node) {
            return 7
          },
          hLineWidth: function () {
            return 0.05
          },
          vLineWidth: function () {
            return 0.05
          },
        },
        margin: [10, 0, 0, 0],
      },
      {
        table: {
          heights: 15,
          widths: [8],
          body: [[' ']],
        },
        layout: {
          paddingTop: function () {
            return -4
          },
          paddingBottom: function () {
            return -3
          },
          paddingLeft: function () {
            return 2.3
          },
          paddingRight: function () {
            return 2.3
          },
          hLineWidth: function () {
            return 0.2
          },
          vLineWidth: function () {
            return 0.2
          },
        },
        absolutePosition: { x: 70, y: 521 },
      },
      {
        table: {
          heights: 15,
          widths: [8],
          body: [[' ']],
        },
        layout: {
          paddingTop: function () {
            return -4
          },
          paddingBottom: function () {
            return -3
          },
          paddingLeft: function () {
            return 2.3
          },
          paddingRight: function () {
            return 2.3
          },
          hLineWidth: function () {
            return 0.2
          },
          vLineWidth: function () {
            return 0.2
          },
        },
        absolutePosition: { x: 70, y: 540 },
      },
      {
        text: info.docType == 1 ? '√' : '',
        fontSize: 16,
        relativePosition: { x: 23, y: -44 },
      },
      {
        text: info.docType == 2 ? '√' : '',
        fontSize: 16,
        relativePosition: { x: 23, y: -25 },
      },
      {
        text: `โดยมีปริมาณพื้นที่ที่ได้รับอนุญาตให้ตั้งสถานบริการรวมทั้งสิ้น${'.'.repeat(
          20,
        )}ตารางเมตร${'.'.repeat(19)}ห้อง`,
        margin: [50, 4, 0, 0],
      },
      {
        text: info.enSpace,
        relativePosition: { x: 310, y: -22 },
      },
      {
        text: info.enRoom,
        relativePosition: { x: 420, y: -22 },
      },
      {
        text: `${'.'.repeat(
          20,
        )}เตียง ทั้งนี้ให้เปิดบริการได้ระหว่างเวลา${'.'.repeat(60)}นาฬิกา`,
        margin: [0, 0, 0, 0],
      },
      {
        text: info.enBed,
        relativePosition: { x: 20, y: -22 },
      },
      {
        text: info.enOpen,
        relativePosition: { x: 250, y: -22 },
      },
      {
        text: `\nอนุญาต ณ วันที่${'.'.repeat(10)}เดือน${'.'.repeat(
          25,
        )}พ.ศ.${'.'.repeat(25)}`,
        margin: [120, 0, 0, 0],
      },
      {
        text: day,
        relativePosition: { x: 195, y: -22 },
      },
      {
        text: month,
        relativePosition: { x: 245, y: -22 },
      },
      {
        text: year,
        relativePosition: { x: 330, y: -22 },
      },
      {
        layout: 'noBorders',
        table: {
          body: [
            [
              {
                text: `(ลายมือชื่อ)${'.'.repeat(55)}พนักงานเจ้าหน้าที่\n( ${
                  info.registryName
                } )\nตำแหน่ง ${info.registryPosition}`,
                alignment: 'center',
              },
            ],
          ],
        },
        margin: [190, 20, 0, 0],
      },

      {
        text: '\nหมายเหตุ',
        bold: true,
        margin: [50, 4, 0, 0],
        decoration: 'underline',
      },
      {
        text: 'ใบอนุญาตนี้ให้ใช้จนถึงวันที่ 31 ธันวาคม ของปีที่ออกใบอนุญาต',
        bold: true,
        margin: [110, -19, 0, 0],
      },
    ],
    defaultStyle: require('@/plugins/pdfmake-style').default.defaultStyleH(),
  }

  const pdfDocGenerator = pdfMake.createPdf(docDefination)
  pdfDocGenerator.getBlob(function (blob) {
    const pdfPreview = document.getElementById('pdfPreview')
    if (pdfPreview) {
      pdfPreview.remove()
    }
    const iframe = document.createElement('iframe')
    iframe.id = 'pdfPreview'
    iframe.style.display = 'none'
    iframe.src = URL.createObjectURL(blob)
    document.body.appendChild(iframe)
    iframe.contentWindow.focus()
    iframe.contentWindow.print()
  })
}

// ! --------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------- ใบเสร็จ -------------------------------------------------------------------------
// ! --------------------------------------------------------------------------------------------------------------------------------

function exportReceipt(data) {
  const info = {
    place: 'อำเภอเมืองปทุมธานี',
    recId: data.recId,
    logo: require('@/static/image.json').logo,
    bglogo: require('@/static/image.json').bglogo,
    date: data.date,
    name: data.name,
    placeName: data.placeName,
    reqId: data.reqId,
    reqDate: data.reqDate,
    gunMark: data.gunMark,
    fee: data.fee.toLocaleString(),
    feeDes: data.feeDes,
    collectEmp: data.collectEmp,
    collectPosi: data.collectPosi,
  }
  const docDefination = {
    pageOrientation: 'landscape',
    pageMargins: [10, 15, 10, -2],
    content: [
      {
        columns: [
          [
            {
              columns: [
                {
                  table: {
                    widths: [50],
                    body: [
                      [
                        {
                          text: 'สำเนา',
                          fontSize: 16,
                          lineHeight: 1.1,
                          bold: true,
                          alignment: 'center',
                        },
                      ],
                    ],
                  },
                  margin: [5, 0, 0, 0],
                },
                {
                  text: '',
                  alignment: 'right',
                  margin: [0, 4, 30, 0],
                },
              ],
            },
          ],
          [
            {
              columns: [
                {
                  table: {
                    widths: [50],
                    body: [
                      [
                        {
                          text: 'ต้นฉบับ',
                          fontSize: 16,
                          lineHeight: 1.1,
                          bold: true,
                          alignment: 'center',
                        },
                      ],
                    ],
                  },
                  margin: [5, 0, 0, 0],
                },
                {
                  text: '',
                  alignment: 'right',
                  margin: [0, 4, 30, 0],
                },
              ],
            },
          ],
        ],
        margin: [0, 0, 0, 16],
      },
      {
        canvas: [
          { type: 'line', x1: 0, y1: 0, x2: 820, y2: 0, lineWidth: 1 },
          { type: 'line', x1: 0, y1: 3, x2: 820, y2: 3, lineWidth: 1 },
        ],
      },
      {
        columns: [
          [
            {
              columns: [
                { text: info.place, alignment: 'left', margin: [5, 0, 0, 0] },
                {
                  text: [{ text: 'เลขที่\t\t', bold: true }, `${info.recId}`],
                  alignment: 'right',
                  margin: [0, 0, 20, 0],
                },
              ],
            },
          ],
          [
            {
              columns: [
                { text: info.place, alignment: 'left', margin: [5, 0, 0, 0] },
                {
                  text: [{ text: 'เลขที่\t\t', bold: true }, `${info.recId}`],
                  alignment: 'right',
                  margin: [0, 0, 20, 0],
                },
              ],
            },
          ],
        ],
        margin: [0, 16, 0, 0],
      },
      {
        columns: [
          [
            {
              image: info.logo,
              width: 50,
              height: 50,
              alignment: 'center',
            },
            {
              text: 'ใบเสร็จรับเงิน',
              fontSize: 26,
              bold: true,
              lineHeight: 1,
              alignment: 'center',
            },
            {
              text: 'ใช้ในราชการกรมการปกครอง',
              fontSize: 16,
              bold: true,
              lineHeight: 1.5,
              alignment: 'center',
            },
            {
              text: [{ text: 'วันที่', bold: true }, `\t${info.date}`],
              lineHeight: 1.5,
              margin: [200, 0, 0, 0],
            },
            {
              text: [{ text: 'ได้รับเงินจาก\t\t', bold: true }, `${info.name}`],
              margin: [5, 0, 0, 0],
            },
            {
              text: `ชื่อสถานที่ประกอบอาชีพ\t\t${info.placeName}`,
              bold: true,
              margin: [5, 0, 0, 0],
            },
            {
              text: [
                { text: 'ตามคำขอเลขที่\t\t', bold: true },
                `${info.reqId}`,
              ],
              margin: [5, 0, 0, 0],
            },
            {
              text: [
                { text: '\t\tลงวันที่  ', bold: true },
                `${info.reqDate}`,
              ],
              relativePosition: { x: 177, y: -24 },
            },
            {
              text: '\nเป็นค่าธรรมเนียม',
              margin: [20, 0, 0, 0],
            },
            {
              text: `${data.feeDetail} จำนวน ${info.fee} บาท`,
              margin: [20, 0, 0, 0],
            },
            {
              text: `\nจำนวนเงินสุทธิ ( ${info.feeDes} ) ${info.fee} บาท`,
              bold: true,
              margin: [20, 0, 0, 0],
            },
            {
              text: `\nลงชื่อ${'.'.repeat(60)}ผู้รับเงิน\n(${
                info.collectEmp
              })\n${info.collectPosi}`,
              bold: true,
              alignment: 'center',
            },
          ],
          [
            {
              image: info.logo,
              width: 50,
              height: 50,
              alignment: 'center',
            },
            {
              text: 'ใบเสร็จรับเงิน',
              fontSize: 26,
              bold: true,
              lineHeight: 1,
              alignment: 'center',
            },
            {
              text: 'ใช้ในราชการกรมการปกครอง',
              fontSize: 16,
              bold: true,
              lineHeight: 1.5,
              alignment: 'center',
            },
            {
              text: [{ text: 'วันที่', bold: true }, `\t${info.date}`],
              lineHeight: 1.5,
              margin: [200, 0, 0, 0],
            },
            {
              text: [{ text: 'ได้รับเงินจาก\t\t', bold: true }, `${info.name}`],
              margin: [5, 0, 0, 0],
            },
            {
              text: `ชื่อสถานที่ประกอบอาชีพ\t\t${info.placeName}`,
              bold: true,
              margin: [5, 0, 0, 0],
            },
            {
              text: [
                { text: 'ตามคำขอเลขที่\t\t', bold: true },
                `${info.reqId}`,
              ],
              margin: [5, 0, 0, 0],
            },
            {
              text: [
                { text: '\t\tลงวันที่  ', bold: true },
                `${info.reqDate}`,
              ],
              relativePosition: { x: 177, y: -24 },
            },
            {
              text: '\nเป็นค่าธรรมเนียม',
              margin: [20, 0, 0, 0],
            },
            {
              text: `${data.feeDetail} จำนวน ${info.fee} บาท`,
              margin: [20, 0, 0, 0],
            },
            {
              text: `\nจำนวนเงินสุทธิ ( ${info.feeDes} ) ${info.fee} บาท`,
              bold: true,
              margin: [20, 0, 0, 0],
            },
            {
              text: `\nลงชื่อ${'.'.repeat(60)}ผู้รับเงิน\n(${
                info.collectEmp
              })\n${info.collectPosi}`,
              bold: true,
              alignment: 'center',
            },
          ],
        ],
      },
      {
        canvas: [
          { type: 'line', x1: 411, y1: -515, x2: 411, y2: 82, lineWidth: 0.5 },
        ],
      },
      {
        image: info.bglogo,
        width: 340,
        height: 340,
        alignment: 'center',
        opacity: 0.09,
        absolutePosition: { x: 0, y: 130 },
      },
    ],
    defaultStyle: require('@/plugins/pdfmake-style').default.landscapeStyle(),
  }
  
  const pdfDocGenerator = pdfMake.createPdf(docDefination)
  pdfDocGenerator.getBlob(function (blob) {
    const pdfPreview = document.getElementById('pdfPreview')
    if (pdfPreview) {
      pdfPreview.remove()
    }
    const iframe = document.createElement('iframe')
    iframe.id = 'pdfPreview'
    iframe.style.display = 'none'
    iframe.src = URL.createObjectURL(blob)
    document.body.appendChild(iframe)
    iframe.contentWindow.focus()
    iframe.contentWindow.print()
  })
}

export default { 
  exportReqEn, 
  exportRecEn, 
  exportReceipt 
}
