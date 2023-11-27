import pdf from '@/plugins/pdfmake-style'
import image from '@/store/image.json'

function exportSb5(){
    const info = {
        image : image.logo
    }

    const docDefination = {
        pageMargins : [80,70,60,30],
        content : [
            {
                text : `แบบ สบ.5`,
                bold : true,
                alignment : 'right',
            },
            {
                text : `ชื่อสถานบริการ${'.'.repeat(50)}`,
                alignment : 'right',
            },
            {
                text : `ใบอนุญาตเลขที่ ${'.'.repeat(48)}`,
                alignment : 'right',
            },
            {
                text : `วันที่ ${'.'.repeat(10)} เดือน ${'.'.repeat(25)} พ.ศ. ${'.'.repeat(10)}`,
                alignment : 'center'
            },
            {
                text : `เรื่อง แจ้งการเปลี่ยนแปลงรายการในบัตรประวัติของพนักงานสถานบริการ`,
                bold : true,
            },
            {
                text : `เรียน${' '.repeat(7)}นายอำเภอ/ปลัดอำเภอผู้เป็นหัวหน้าประจำกึ่งอำเภอ${'.'.repeat(74)}`
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
                relativePosition: { x: 28 , y : -17}
            },
            {
                text : `(กรณีในจังหวัดอื่นนอกจากกรุงเทพมหานคร)`,
                margin : [45,0,0,0]
            },
            {
                text : `ผู้กำกับการ/รองผู้กำกับการซึ่งเป็นหัวหน้าสถานีตำรวจนครบาล${'.'.repeat(57)}`,
                margin : [45,0,0,0]
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
                relativePosition: { x: 28 , y : -17}
            },
            {
                text : `(กรณีในกรุงเทพมหานคร)`,
                margin : [45,0,0,0]
            },
            {
                text : `เพื่อให้เป็นไปตามมาตรา 14 แห่งพระราชบัญญัติสถานบริการ พ.ศ. 2509 แก้ไขเพิ่มเติม`,
                margin : [70,0,0,0]
            },
            {
                text : `โดยพระราชบัญญัติสถานบริการ (ฉบับที่ 4) พ.ศ. 2546 และกฎกระทรวงกำหนดหลักเกณฑ์เกี่ยวกับการ`
            },
            {
                text : `ขออนุญาตและการดำเนินกิจการสถานบริการ พ.ศ. 2549 ออกตามความในพระราชบัญญัติสถานบริการ`
            },
            {
                text : `พ.ศ.2509 ข้าพเจ้า จึงขอแจ้งว่าบัตรประวัติของ ${'.'.repeat(60)} หมายเลขประจำตัว`
            },
            {
                text : `ของพนักงานสถานบริการ เลขที่${'.'.repeat(25)} ซึ่งทำงานในหน้าที่${'.'.repeat(43)} ในสถานบริการ`
            },
            {
                text : `ของข้าพเจ้าได้มีการเปลี่ยนแปลงรายการ ดังนี้`
            },
            {
                text : `${'.'.repeat(175)}`
            },
            {
                text : `${'.'.repeat(175)}`
            },
            {
                text : `${'.'.repeat(175)}`
            },
            {
                text : `${'.'.repeat(175)}`
            },
            {
                text : `จึงเรียนมาเพื่อทราบ พร้อมนี้ได้แนบหลักฐานการเปลี่ยนแปลงมาด้วยแล้ว`,
                alignment : 'center',
                margin : [0,15,0,0]
            },
            {
                text : `ขอแสดงความนับถือ`,
                alignment : 'center',
                margin : [50,15,0,0]
            },
            {
                text : `(ลายมือชื่อ) ${'.'.repeat(50)} ผู้รับอนุญาตตั้งสถานบริการ`,
                alignment : 'center',
                margin : [120,50,0,0]
            },
            {
                text : `( ${'.'.repeat(50)} )`,
                alignment : 'center',
                margin : [60,0,0,0]
            },
            {
                text : `(ลายมือชื่อ) ${'.'.repeat(50)} เจ้าของประวัติ`,
                alignment : 'center',
                margin : [70,20,0,0]
            },
            {
                text : `( ${'.'.repeat(50)} )`,
                alignment : 'center',
                margin : [60,0,0,0]
            },
        ],
        defaultStyle : pdf.SecondaryStyle(),
    }

    docDefination.content.push(
        {
            text : `(ด้านหลัง)`,
            bold : true,
            alignment : 'center',
            pageBreak: 'before',
        },
        {
            text : `แบบ สบ.5`,
            bold : true,
            alignment : 'right',
            relativePosition : { x : 0 , y : -22}
        },
        {
            table : {
                widths : ['*','*'],
                body : [
                    [
                        {
                            text : `ประวัติย่อ`,
                            bold : true,
                            alignment : 'center',
                            border: [false, true, true, false]
                        },
                        {
                            text : `บัตรประจำตัวประชาชนหรือใบคำสัญ`,
                            bold : true,
                            alignment : 'center',
                            border: [false, true, false, false]
                        },
                    ],
                    [
                        {
                            text : `ชื่อ ${'.'.repeat(75)}`,
                            border: [false, false, true, false]
                        },
                        {
                            text : `ประจำตัวคนต่างด้าว`,
                            bold : true,
                            alignment : 'center',
                            border: [false, false, false, false]
                        },
                    ],
                    [
                        {
                            text : `เลขประจำตัวประชาชน ${'.'.repeat(42)}`,
                            border: [false, false, true, false]
                        },
                        {
                            text : `เลขที่ ${'.'.repeat(34)} ลงวันที่ ${'.'.repeat(25)}`,
                            border: [false, false, false, false]
                        },
                    ],
                    [
                        {
                            text : `ชื่อบิดา ${'.'.repeat(68)}`,
                            border: [false, false, true, false]
                        },
                        {
                            text : `ออกให้ ณ ${'.'.repeat(66)}`,
                            border: [false, false, false, false]
                        },
                    ],
                    [
                        {
                            text : `ชื่อมารดา ${'.'.repeat(64)}`,
                            border: [false, false, true, false]
                        },
                        {
                            text : `อำเภอ/เขต ${'.'.repeat(64)}`,
                            border: [false, false, false, false]
                        },
                    ],
                    [
                        {
                            text : `วันเกิดที่ ${'.'.repeat(10)} เดือน ${'.'.repeat(25)} พ.ศ. ${'.'.repeat(10)}`,
                            border: [false, false, true, false]
                        },
                        {
                            text : `จังหวัด ${'.'.repeat(71)}`,
                            border: [false, false, false, false]
                        },
                    ],
                    [
                        {
                            text : `อำเภอ/เขต ${'.'.repeat(62)}`,
                            border: [false, false, true, false]
                        },
                        {
                            text : `ที่อยู่ปัจจุบัน`,
                            bold : true,
                            alignment : 'center',
                            border: [false, false, false, false]
                        },
                    ],
                    [
                        {
                            text : `จังหวัด ${'.'.repeat(69)}`,
                            border: [false, false, true, false]
                        },
                        {
                            text : `อยู่บ้านเลขที่ ${'.'.repeat(62)}`,
                            border: [false, false, false, false]
                        },
                    ],
                    [
                        {
                            rowSpan: 8,
                            canvas: [
                                {
                                    type: 'rect',
                                    x: 0,
                                    y: -40,
                                    w: 110,
                                    h: 155,
                                }
                            ],
                            alignment: 'left',
                            relativePosition: { x: 10 , y : 50},
                            border: [false, false, true, true]
                        },
                        {
                            text : `ตรอก/ซอย ${'.'.repeat(64)}`,
                            border: [false, false, false, false]
                        },
                    ],
                    [
                        '',
                        {
                            text : `ถนน ${'.'.repeat(75)}`,
                            border: [false, false, false, false]
                        },
                    ],
                    [
                        '',
                        {
                            text : `ตำบล/แขวง ${'.'.repeat(63)}`,
                            border: [false, false, false, false]
                        },
                    ],
                    [
                        '',
                        {
                            text : `อำเภอ/เขต ${'.'.repeat(64)}`,
                            border: [false, false, false, false]
                        },
                    ],
                    [
                        '',
                        {
                            text : `จังหวัด ${'.'.repeat(71)}`,
                            border: [false, false, false, false]
                        },
                    ],
                    [
                        '',
                        {
                            text : `เลขหมายโทรศัพท์พืื้นฐาน ${'.'.repeat(41)}`,
                            border: [false, false, false, false]
                        },
                    ],
                    [
                        '',
                        {
                            text : `เลขหมายโทรศัพท์เคลื่อนที่ของพนักงาน ${'.'.repeat(19)}`,
                            border: [false, false, false, false]
                        },
                    ],
                    [
                        '',
                        {
                            text : `${'.'.repeat(84)}`,
                            border: [false, false, false, true]
                        },
                    ]
                ],
            },
            lineHeight : 1,
            margin : [0,15,0,0],
        },
        {
            text: `ที่ปิดรูปถ่าย\nเจ้าของประวัติ\nขนาด 4x6 ซม.`,
            alignment: 'center',
            fontSize: 14,
            relativePosition: { x: -157 , y : -120}
        },
        {
            text : `ผลการตรวจสอบของเจ้าหน้าที่`,
            bold : true,
            margin : [40,20,0,5]
        },
        {
            text : `${'.'.repeat(175)}`
        },
        {
            text : `${'.'.repeat(175)}`
        },
        {
            text : `${'.'.repeat(175)}`
        },
        {
            text : `${'.'.repeat(175)}`
        },
        {
            text : `คำสั่งของนายอำเภอหรือปลัดอำเภอผู้เป็นหัวหน้าประจำกึ่งอำเภอท้องที่`,
            bold : true,
            margin : [40,0,0,0]
        },
        {
            text : `กรณีในจังหวัดอื่นนอกจากกรุงเทพมหานคร หรือผู้กำกับการหรือรองผู้กำกับการ`,
            bold : true,
            margin : [40,0,0,0]
        },
        {
            text : `ซึ่งเป็นหัวหน้าสถานีตำรวจนครบาลท้องที่กรณีในกรุงเทพมหานคร`,
            bold : true,
            margin : [40,0,0,0]
        },
        {
            text : `ทราบ/ให้เก็บรักษาไว้คู่กับประวัติเดิม`,
            bold : true,
            margin : [55,0,0,0]
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
            relativePosition: { x: 35 , y : -17}
        },
        {
            text : [
                {
                    text : `อื่นๆ`,
                    bold : true,
                },
                {
                    text : `${'.'.repeat(50)}`,
                }
            ],
            margin : [55,0,0,0]
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
            relativePosition: { x: 35 , y : -17}
        },
        {
            text : [
                {
                    text : `(`,
                },
                {
                    text : `ลายมือชื่อ`,
                    bold : true
                },
                {
                    text : `)`,
                },
                {
                    text : `${'.'.repeat(81)}`
                }
            ],
            alignment : 'center',
            margin : [120,10,0,0]
        },
        {
            text : `(${'.'.repeat(80)})`,
            alignment : 'center',
            margin : [170,0,0,0]
        },
        {
            text : [
                {
                    text : `ตำแหน่ง`,
                    bold : true
                },
                {
                    text : `${'.'.repeat(82)}`
                }
            ],
            alignment : 'center',
            margin : [130,0,0,0]
        },
    )

    window.pdfMake.createPdf(docDefination).open()
}

export default {
    exportSb5
}