import pdf from '@/plugins/pdfmake-style'
import image from '@/store/image.json'

function exportSb3(){
    const info = {
        image : image.logo,
    }

    const docDefination = {
        pageMargins : [80,70,60,30],
        content : [
            {
                text : 'คำขอต่ออายุใบอนุญาตให้ตั้งสถานบริการ',
                bold : true,
                alignment : 'center',
                margin : [0,50,0,0]
            },
            {
                text : 'แบบ สบ.3',
                bold : true,
                alignment : 'right',
                relativePosition : { x : 0 , y : -45}
            },
            {
                text : `เขียนที่${'.'.repeat(45)}`,
                alignment : 'right',
                margin : [0,20,0,0]
            },
            {
                text : `วันที่ ${'.'.repeat(10)} เดือน ${'.'.repeat(22)} พ.ศ. ${'.'.repeat(10)}`,
                alignment : 'right',
            },
            {
                text : `1. ข้าพเจ้า ${' '.repeat(5)} (กรณีบุคคลธรรมดา) ${'.'.repeat(49)} สัญชาติ ${'.'.repeat(14)} อายุ ${'.'.repeat(10)} ปี`,
                margin : [35,0,0,0]
            },
            {
                canvas: [
                    {
                        type: 'rect',
                        x: 0,
                        y: 0,
                        w: 10,
                        h: 10,
                    }
                ],
                margin: [30,0,0,0],
                relativePosition: { x: 55 , y : -17}
            },
            {
                text : `เลขประจำตัวประชาชน${'.'.repeat(51)}หรือใบสำคัญประจำตัวคนต่างด้าว เลขที่${'.'.repeat(22)} `
            },
            {
                text : `ออกให้ ณ ${'.'.repeat(25)} อำเภอ/เขต ${'.'.repeat(22)} จังหวัด ${'.'.repeat(31)} อยู่บ้านเลขที่ ${'.'.repeat(22)}`
            },
            {
                text : `ตรอก/ซอย${'.'.repeat(36)} ถนน${'.'.repeat(22)} ตำบล/แขวง${'.'.repeat(25)} อำเภอ/เขต${'.'.repeat(25)}`
            },
            {
                text: `จังหวัด${'.'.repeat(31)} เลขหมายโทรศัพท์พื้นฐาน${'.'.repeat(31)} เลขหมายโทรศัพท์เคลื่อนที่${'.'.repeat(15)}`
            },
            {
                text : `${'.'.repeat(46)}`
            },
            {
                text : `(กรณีนิติบุคคล)${'.'.repeat(60)} จดทะเบียนเป็นนิติบุคคล`,
                margin : [103,0,0,0]
            },
            {
                canvas: [
                    {
                        type: 'rect',
                        x: 0,
                        y: 0,
                        w: 10,
                        h: 10,
                    }
                ],
                margin: [30,0,0,0],
                relativePosition: { x: 55 , y : -17}
            },
            {
                text : `ทะเบียนเลขที่${'.'.repeat(20)}เมื่อวันที่${'.'.repeat(15)}ณ${'.'.repeat(25)}สำนักงานแห่งใหญ่ตั้งอยู่เลขที่${'.'.repeat(29)}`
            },
            {
                text : `ตรอก/ซอย${'.'.repeat(30)} ถนน${'.'.repeat(27)} ตำบล/แขวง${'.'.repeat(23)} อำเภอ/เขต${'.'.repeat(28)}`
            },
            {
                text : `จังหวัด${'.'.repeat(37)} โดย${'.'.repeat(67)} ผู้แทนของนิติบุคคลผู้รับอนุญาต`
            },
            {
                text : `สัญชาติ${'.'.repeat(30)} อายุ${'.'.repeat(15)}ปี เลขประจำตัวประชาชน${'.'.repeat(60)} หรือ`
            },
            {
                text : `ใบสำคัญประจำตัวคนต่างด้าวเลขที่${'.'.repeat(20)} ออกให้ ณ${'.'.repeat(27)} อำเภอ/เขต${'.'.repeat(36)}`
            },
            {
                text : `จังหวัด${'.'.repeat(30)} อยู่บ้านเลขที่${'.'.repeat(25)} ตรอก/ซอย${'.'.repeat(28)} ถนน${'.'.repeat(31)}`
            },
            {
                text : `อำเภอ/เขต${'.'.repeat(32)} จังหวัด${'.'.repeat(37)} เลขหมายโทรศัพท์${'.'.repeat(45)}`
            },
            {
                text : `เลขหมายโทรศัพท์เคลื่อนที่${'.'.repeat(57)}`
            },
            {
                text : `2. ข้าพเจ้าได้รับอนุญาตให้ตั้งสถานบริการ ตามมาตรา 3(1)${' '.repeat(5)}(2)${' '.repeat(5)}(3)${' '.repeat(5)}(4)${' '.repeat(5)}(5)${' '.repeat(5)}(6)${' '.repeat(5)}`,
                margin : [35,0,0,0]
            },
            {
                canvas: [
                    {
                        type: 'rect',
                        x: 0,
                        y: 0,
                        w: 10,
                        h: 10,
                    }
                ],
                margin: [30,0,0,0],
                relativePosition: { x: 251 , y : -17}
            },
            {
                canvas: [
                    {
                        type: 'rect',
                        x: 0,
                        y: 0,
                        w: 10,
                        h: 10,
                    }
                ],
                margin: [30,0,0,0],
                relativePosition: { x: 280 , y : -17}
            },
            {
                canvas: [
                    {
                        type: 'rect',
                        x: 0,
                        y: 0,
                        w: 10,
                        h: 10,
                    }
                ],
                margin: [30,0,0,0],
                relativePosition: { x: 309 , y : -17}
            },
            {
                canvas: [
                    {
                        type: 'rect',
                        x: 0,
                        y: 0,
                        w: 10,
                        h: 10,
                    }
                ],
                margin: [30,0,0,0],
                relativePosition: { x: 338 , y : -17}
            },
            {
                canvas: [
                    {
                        type: 'rect',
                        x: 0,
                        y: 0,
                        w: 10,
                        h: 10,
                    }
                ],
                margin: [30,0,0,0],
                relativePosition: { x: 367 , y : -17}
            },
            {
                canvas: [
                    {
                        type: 'rect',
                        x: 0,
                        y: 0,
                        w: 10,
                        h: 10,
                    }
                ],
                margin: [30,0,0,0],
                relativePosition: { x: 396 , y : -17}
            },
            {
                text : `ประจำปีพุทธศักราช${'.'.repeat(20)} ตามใบอนุญาตเลขที่${'.'.repeat(31)}`
            },
            {
                text : `โดยใช้ชื่อสถานบริการเป็นภาษาไทยว่า${'.'.repeat(114)}`
            },
            {
                text : `ภาษาต่างประเทศ (ถ้ามี) ว่า${'.'.repeat(131)}`
            },
            {
                text : `ตั้งอยู่ ณ เลขที่${'.'.repeat(16)} ตรอก/ซอย${'.'.repeat(27)} ถนน${'.'.repeat(27)} ตำบล/แขวง${'.'.repeat(33)}`
            },
            {
                text : `อำเภอ/เขต${'.'.repeat(28)} จังหวัด${'.'.repeat(32)} เลขหมายโทรศัพท์พื้นฐาน${'.'.repeat(42)}`
            },
            {
                text : `3. ข้าพเจ้าขอยื่นคำขอต่อ${'.'.repeat(95)} ซึ่งเป็นพนักงาน`,
                margin : [35,0,0,0]
            },
            {
                text : `เจ้าหน้าที่ตามพระราชบัญญัติสถานบริการ พ.ศ.2509 เพื่อขอต่ออายุใบอนุญาตให้ตั้งสถานบริการประจำปี`
            },
            {
                text : `พุทธศักราช ${'.'.repeat(15)}`
            },

        ],
        defaultStyle : pdf.SecondaryStyle(),
    }

    docDefination.content.push(
        {
            text : `แบบ สบ.3`,
            alignment : 'right',
            margin : [0,30,0,0],
            pageBreak: 'before',
        },
        {
            text : `- 2 -`,
            alignment : 'center',
            relativePosition : { x : 0, y : -60}
        },
        {
            text : `พร้อมกับคำขอนี้ ข้าพเจ้าได้แนบหลักฐานต่างๆ มาด้วยแล้ว คือ`,
            margin : [35,0,0,0],
        },
        {
            text : `(1) สำเนาใบอนุญาตให้ตั้งสถานบริการ ประจำปีพุทธศักราช ${'.'.repeat(15)}`,
            margin : [35,0,0,0],
        },
        {
            text : `(2) รูปถ่ายของผู้รับอนุญาตตั้งสถานบริการหรือผู้แทนของนิติบุคคลผู้รับอนุญาตตั้งสถานบริการ`,
            margin : [35,0,0,0],
        },
        {
            text : `หน้าตรงขนาด 4x6 เซนติเมตร จำนวนสามรูป`
        },
        {
            text : `(3) ใบรับรองแพทย์แผนปัจจุบัน ชั้น 1 รับรองว่าผู้ขอต่อใบอนุญาต หรือผู้แทนนิติบุคคล`,
            margin : [35,0,0,0],
        },
        {
            text : `มีคุณสมบัติ ตามมาตรา 6(3) และ (4)`
        },
        {
            text : `(4) กรณีที่หลักฐานและเอกสารที่ยื่นไว้ในการขออนุญาตมีการแก้ไขหรือเปลี่ยนแปลง ผู้ขอต่ออายุ`,
            margin : [35,0,0,0],
        },
        {
            text : `ใบอนุญาต ต้องยื่นหลักฐานและเอกสารที่มีการแก้ไขหรือเปลี่ยนแปลงด้วย`
        },
        {
            text : `(ลายมือชื่อ)${'.'.repeat(50)}ผู้ขออนุญาต`,
            alignment : 'center',
            margin : [120,70,0,0],
        },
        {
            text : `(${'.'.repeat(50)})`,
            alignment : 'center',
            margin : [120,0,0,0]
        },
    )

    window.pdfMake.createPdf(docDefination).open()
}

export default {
    exportSb3
}