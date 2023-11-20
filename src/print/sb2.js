import pdf from '@/plugins/pdfmake-style'
import image from '@/store/image.json'

function exportSb2(){
    const info = {
        image: image.logo,
        // checkbox: image.checkbox,
    }

    const docDefination = {
        pageMargins: [70, 60, 70, 30],
        content: [
            {
                image: info.image,
                alignment: 'center',
                fit: [75,75],
            },
            {
                text: `แบบ สบ.2`,
                bold: true,
                alignment: 'right',
                relativePosition: { x: 0 , y :-75}
            },
            {
                canvas: [
                    {
                        type: 'rect',
                        x: 0,
                        y: -40,
                        w: 100,
                        h: 120,
                    }
                ],
                alignment: 'right',
                relativePosition: { x: 10 , y : 0}
            },
            {
                text: `ใบอนุญาต`,
                bold: true,
                alignment: 'center',
                fontSize: 18,
                margin: [0,10,0,0]
            },
            {
                text: `ให้ตั้งสถานบริการ`,
                bold: true,
                fontSize: 18,
                alignment: 'center',
            },
            {
                text: `ประจำปี พุทธศักราช${'.'.repeat(25)}`,
                bold: true,
                fontSize: 18,
                alignment: 'center',
            },
            {
                text: `เลขที่${'.'.repeat(17)}/ ${'.'.repeat(17)}`,
                margin: [30,0,0,0]
            },
            {
                text: `อาศัยอำนาจตามความในมาตรา 4 แห่งพระราชบัญญัติสถานบริการ พ.ศ.2509 อนุญาตให้`,
                margin: [30,0,0,0]
            },
            {
                text: `(กรณีบุคคลธรรมดา) ${'.'.repeat(77)} สัญชาติ ${'.'.repeat(30)}`,
                margin: [50,0,0,0]
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
                relativePosition: { x: 0 , y : -17}
            },
            {
                text: `อายุ ${'.'.repeat(12)} ปี   เลขประจำตัวประชาชน ${'.'.repeat(70)} อยู่บ้านเลขที่ ${'.'.repeat(15)}`,
            },
            {
                text: `ตรอก/ซอย ${'.'.repeat(35)} ถนน ${'.'.repeat(40)} ตำบล/แขวง ${'.'.repeat(49)}`
            },
            {
                text: `อำเภอ/เขต ${'.'.repeat(45)} จังหวัด ${'.'.repeat(48)}`
            },
            {
                text: `(กรณีนิติบุคคล) ${'.'.repeat(130)}`,
                margin: [50,0,0,0]
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
                relativePosition: { x: 0 , y : -17}
            },
            {
                text: `จดทะเบียนเป็นนิติบุคคลทะเบียนเลขที่ ${'.'.repeat(40)} เมื่อวันที่ ${'.'.repeat(10)} เดือน ${'.'.repeat(15)} พ.ศ. ${'.'.repeat(10)}`
            },
            {
                text: `ณ ${'.'.repeat(60)} สำนักงานแห่งใหญ่ตั้งอยู่เลขที่ ${'.'.repeat(15)} ตรอก/ซอย ${'.'.repeat(25)}`
            },
            {
                text: `ถนน ${'.'.repeat(25)} ตำบล/แขวง ${'.'.repeat(25)} อำเภอ/เขต ${'.'.repeat(30)} จังหวัด ${'.'.repeat(30)}`
            },
            {
                text: `โดย ${'.'.repeat(50)} ผู้แทนของนิติบุคคลผู้รับอนุญาต สัญชาติ ${'.'.repeat(27)} อายุ ${'.'.repeat(10)} ปี`
            },
            {
                text: `ตั้งสถานบริการตามมาตรา 3(1) ${' '.repeat(4)} (2) ${' '.repeat(4)} (3) ${' '.repeat(4)} (4) ${' '.repeat(4)} (5) ${' '.repeat(4)} (6) `
            },
            {
                canvas: [
                    {
                        type: 'rect',
                        x: 0,
                        y: 0,
                        w: 10,
                        h: 10,
                    },
                ],
                relativePosition: { x: 135 , y : -17}
            },
            {
                canvas: [
                    {
                        type: 'rect',
                        x: 0,
                        y: 0,
                        w: 10,
                        h: 10,
                    },
                ],
                relativePosition: { x: 168 , y : -17}
            },
            {
                canvas: [
                    {
                        type: 'rect',
                        x: 0,
                        y: 0,
                        w: 10,
                        h: 10,
                    },
                ],
                relativePosition: { x: 200 , y : -17}
            },
            {
                canvas: [
                    {
                        type: 'rect',
                        x: 0,
                        y: 0,
                        w: 10,
                        h: 10,
                    },
                ],
                relativePosition: { x: 233 , y : -17}
            },
            {
                canvas: [
                    {
                        type: 'rect',
                        x: 0,
                        y: 0,
                        w: 10,
                        h: 10,
                    },
                ],
                relativePosition: { x: 265 , y : -17}
            },
            {
                canvas: [
                    {
                        type: 'rect',
                        x: 0,
                        y: 0,
                        w: 10,
                        h: 10,
                    },
                ],
                relativePosition: { x: 298 , y : -17}
            },
            {
                text: `โดยใช้ชื่อสถานบริการเป็นภาษาไทยชื่อว่า ${'.'.repeat(108)}`
            },
            {
                text: `ภาษาต่างประเทศ (ถ้ามี) ว่า ${'.'.repeat(129)}`
            },
            {
                text: `ตั้งอยู่ ณ เลขที่ ${'.'.repeat(40)} ตรอก/ซอย ${'.'.repeat(40)} ถนน ${'.'.repeat(40)}`
            },
            {
                text: `ตำบล/แขวง ${'.'.repeat(40)} อำเภอ/เขต ${'.'.repeat(40)} จังหวัด ${'.'.repeat(40)}`
            },
            {
                canvas: [
                    {
                        type: 'rect',
                        x: 0,
                        y: 0,
                        w: 445,
                        h: 30,
                    },
                ],
                alignment: 'right',
                relativePosition: { x: 0 , y : 0}
            },
            {
                text: `ในเขตอันมีปริมณฑลจำกัดเพื่อการอนุญาตให้ตั้งสถานบริการ`,
                fontSize: 12,
                margin: [30,0,0,0]
            },
            {
                canvas: [
                    {
                        type: 'rect',
                        x: 0,
                        y: 0,
                        w: 8,
                        h: 8,
                    },
                ],
                relativePosition: { x: 15 , y : -13}
            },
            {
                text: `นอกเขตอันมีปริมณฑลจำกัดเพื่อการอนุญาตให้ตั้งสถานบริการ`,
                fontSize: 12,
                margin: [30,0,0,0]
            },
            {
                canvas: [
                    {
                        type: 'rect',
                        x: 0,
                        y: 0,
                        w: 8,
                        h: 8,
                    },
                ],
                relativePosition: { x: 15 , y : -13}
            },
            
            {
                text: `โดยมีปริมาณพื้นที่ที่ได้รับอนุญาตให้ตั้งสถานบริการรวมทั้งสิ้น ${'.'.repeat(17)} ตารางเมตร / ${'.'.repeat(16)} ห้อง`,
                margin: [30,5,0,0]
            },
            {
                text: `${'.'.repeat(15)} เตียง ทั้งนี้ให้เปิดทำการได้ระหว่างเวลา ${'.'.repeat(65)} นาฬิกา`
            },
            {
                text: `อนุญาต ณ วันที่ ${'.'.repeat(15)} เดือน ${'.'.repeat(25)} พ.ศ. ${'.'.repeat(15)}`,
                margin: [80,10,0,0]
            },
            {
                text: `(ลายมือชื่อ) ${'.'.repeat(50)} พนักงานเจ้าหน้าที่`,
                margin: [180,10,0,0]
            },
            {
                text: `(${'.'.repeat(50)})`,
                margin: [230,0,0,0]
            },
            {
                text: `ตำแหน่ง ${'.'.repeat(50)}`,
                margin: [195,0,0,0]
            },
            {
                text: [
                    {
                        text: `หมายเหตุ`,
                        bold: true,
                        decoration: 'underline',
                    },
                    {
                        text: `${' '.repeat(5)}ใบอนุญาตนี้ให้ใช้ได้ถึงวันที่ 31 ธันวา ของปีที่ออกใบอนุญาต`,
                        bold: true,
                    }
                ],
                margin: [0,0,0,0]
            }
        ],
        defaultStyle: pdf.SecondaryStyle(),
    }

    docDefination.content.push(
        {
            text: '(ด้านหลัง)',
            bold: true,
            alignment: 'center',
            pageBreak: 'before',
        },
        {
            text: 'แบบ สบ.2',
            bold: true,
            alignment: 'right',
            relativePosition: {x:0 , y:-21}
        },
        {
            text: `เงื่อนไขในการดำเนินกิจการสถานบริการของผู้รับอนุญาตตั้งสถานบริการ`,
            bold: true,
            fontSize: 16,
            decoration: 'underline',
            alignment: 'center',
            margin: [0,30,0,0]
        },
        {
            ol: [
                'กรณีผู้รับอนุญาตตั้งสถานบริการขาดคุณสมบัติตามมาตรา ๖ จะถูกเพิกถอนใบอนุญาตให้ตั้งสถานบริการ ทันที',
                'ผู้รับอนุญาตตั้งสถานบริการจะต้องไม่กระทำการฝ่าฝืนข้อห้ามตามพระราชบัญญัติสถานบริการ พ.ศ.๒๕๐๙ และจะต้องปฏิบัติตามเงื่อนไขแห่งพระราชบัญญัติดังกล่าวรวมทั้งกฎกระทรวงและประกาศกระทรวงที่ เกี่ยวข้องโดยเคร่งครัด',
                'ผู้รับอนุญาตตั้งสถานบริการจะต้องไม่ดำเนินกิจการในลักษณะที่เป็นการขัดต่อความสงบเรียบร้อย หรือ ศีลธรรมอันดีของประชาชน',
                'กรณีผู้รับอนุญาตตั้งสถานบริการละเลยหรือกระทำการฝ่าฝืนเงื่อนไขดังกล่าวข้างต้นจะต้องถูกดำเนินคดี อาญาตามที่กฎหมายบัญญัติและพนักงานเจ้าหน้าที่มีอำนาจสั่งพักใช้ใบอนุญาต หรือสั่งเพิกถอนใบอนุญาต แล้วแต่กรณีได้ทันที หรือพนักงานเจ้าหน้าที่อาจมีคำสั่งไม่ต่ออายุใบอนุญาตให้ตั้งสถานบริการในปีถัดไป ทั้งนี้ตามหลักเกณฑ์ที่กระทรวงมหาดไทยได้ออกประกาศไว้',
                'ใบอนุญาตให้ตั้งสถานบริการให้ใช้ได้จนถึง ๓๑ ธันวาคม ของปีที่ระบุในใบอนุญาต ผู้รับอนุญาตผู้ใด ประสงค์จะขอต่ออายุใบอนุญาต จะต้องยื่นคำขอเสียก่อนใบอนุญาตสิ้นอายุ'
            ],
            margin: [0,20,0,0]
        },
    )
    //pdf.pdfPrintPreview(docDefination)
    window.pdfMake.createPdf(docDefination).open()
}

export default {
    exportSb2
}