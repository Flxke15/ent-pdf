import pdf from '@/plugins/pdfmake-style'
import image from '@/store/image.json'

function exportSb3(){
    const info = {
        image : image.logo,
    }

    const docDefination = {
        pageMargins : [70,60,70,30],
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
                text : `เลขประจำตัวประชาชน${'.'.repeat(51)}หรือใบสำคัญประจำตัวคนต่างด้าว เลขที่${'.'.repeat(22)} `
            },
            {
                text : `ออกให้ ณ ${'.'.repeat(25)} อำเภอ/เขต ${'.'.repeat(22)} จังหวัด ${'.'.repeat(31)} อยู่บ้านเลขที่ ${'.'.repeat(22)}`
            }

        ],
        defaultStyle : pdf.SecondaryStyle(),
    }

    window.pdfMake.createPdf(docDefination).open()
}

export default {
    exportSb3
}