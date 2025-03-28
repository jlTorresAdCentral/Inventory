import { useTranslation } from "react-i18next";
import { purpleBadge, screenContainer, screenFooter, sectionAllHeight, sectionContainer } from "../assets/styles/core.css";
import Navbar from "../components/navbar/Navbar";
import { useEffect } from "react";
import ScreenHeaderComponent from "../components/screen.header.component";
import TableToolbarComponent from "../components/table/table-toolbar.component";
import { headerToolbarSpacer, tableVerticalSpacer } from "../assets/styles/home.css";
import FilterComponent from "../components/filter.component";
import TableComponent from "../components/table/table.component";

const HomeComponent = () => {
    const columna = ["Item Name", "AdCentral SKU", "Vendor SKU", "Collection", "Available", "Commited", "Total", "Taxable", "Cost", "Selling Price"]
    const filas = [
        ["cable inalambrico 1 mts", "SKU-AEDS1", "VE1", "Devices/Cases", "11", "1", "10", "No", "$ 1.00", "$ 14"],
        ["cable inalambrico 2 mts", "SKU-AEDS2", "VE2", "Devices/Cases", "12", "2", "10", "Yes", "$ 2.00", "$ 15"],
        ["cable inalambrico 3 mts", "SKU-AEDS3", "VE3", "Devices/Cases", "13", "3", "10", "No", "$ 3.00", "$ 16"],
        ["cable inalambrico 4 mts", "SKU-AEDS4", "VE4", "Devices/Cases", "14", "4", "10", "Yes", "$ 4.00", "$ 17"],
        ["cable inalambrico 5 mts", "SKU-AEDS5", "VE5", "Devices/Cases", "15", "5", "10", "No", "$ 5.00", "$ 18"],
        ["cable inalambrico 6 mts", "SKU-AEDS6", "VE6", "Devices/Cases", "16", "6", "10", "Yes", "$ 6.00", "$ 19"],
        ["cable inalambrico 7 mts", "SKU-AEDS7", "VE7", "Devices/Cases", "17", "7", "10", "Yes", "$ 7.00", "$ 20"],
        ["cable inalambrico 8 mts", "SKU-AEDS8", "VE8", "Devices/Cases", "18", "8", "10", "Yes", "$ 8.00", "$ 21"],
        ["cable inalambrico 9 mts", "SKU-AEDS9", "VE9", "Devices/Cases", "19", "9", "10", "No", "$ 9.00", "$ 22"],
        ["cable inalambrico 10 mts", "SKU-AEDS10", "VE10", "Devices/Cases", "20", "10", "10", "No", "$ 10.00", "$ 23"],
        ["cable inalambrico 11 mts", "SKU-AEDS11", "VE11", "Devices/Cases", "21", "11", "10", "Yes", "$ 11.00", "$ 24"],
        ["cable inalambrico 12 mts", "SKU-AEDS12", "VE12", "Devices/Cases", "22", "12", "10", "Yes", "$ 12.00", "$ 25"],
        ["cable inalambrico 13 mts", "SKU-AEDS13", "VE13", "Devices/Cases", "23", "13", "10", "Yes", "$ 13.00", "$ 26"],
        ["cable inalambrico 14 mts", "SKU-AEDS14", "VE14", "Devices/Cases", "24", "14", "10", "No", "$ 14.00", "$ 27"],
        ["cable inalambrico 15 mts", "SKU-AEDS15", "VE15", "Devices/Cases", "25", "15", "10", "No", "$ 15.00", "$ 28"],
        ["cable inalambrico 16 mts", "SKU-AEDS16", "VE16", "Devices/Cases", "26", "16", "10", "No", "$ 16.00", "$ 29"],
        ["cable inalambrico 17 mts", "SKU-AEDS17", "VE17", "Devices/Cases", "27", "17", "10", "Yes", "$ 17.00", "$ 30"],
        ["cable inalambrico 18 mts", "SKU-AEDS18", "VE18", "Devices/Cases", "28", "18", "10", "No", "$ 18.00", "$ 31"],
        ["cable inalambrico 19 mts", "SKU-AEDS19", "VE19", "Devices/Cases", "29", "19", "10", "No", "$ 19.00", "$ 32"],
        ["cable inalambrico 20 mts", "SKU-AEDS20", "VE20", "Devices/Cases", "30", "20", "10", "No", "$ 20.00", "$ 33"],
        ["cable inalambrico 21 mts", "SKU-AEDS21", "VE21", "Devices/Cases", "31", "21", "10", "No", "$ 21.00", "$ 34"],
        ["cable inalambrico 22 mts", "SKU-AEDS22", "VE22", "Devices/Cases", "32", "22", "10", "Yes", "$ 22.00", "$ 35"],
        ["cable inalambrico 23 mts", "SKU-AEDS23", "VE23", "Devices/Cases", "33", "23", "10", "No", "$ 23.00", "$ 36"],
        ["cable inalambrico 24 mts", "SKU-AEDS24", "VE24", "Devices/Cases", "34", "24", "10", "Yes", "$ 24.00", "$ 37"],
        ["cable inalambrico 25 mts", "SKU-AEDS25", "VE25", "Devices/Cases", "35", "25", "10", "Yes", "$ 25.00", "$ 38"],
        ["cable inalambrico 26 mts", "SKU-AEDS26", "VE26", "Devices/Cases", "36", "26", "10", "No", "$ 26.00", "$ 39"],
        ["cable inalambrico 27 mts", "SKU-AEDS27", "VE27", "Devices/Cases", "37", "27", "10", "No", "$ 27.00", "$ 40"],
        ["cable inalambrico 28 mts", "SKU-AEDS28", "VE28", "Devices/Cases", "38", "28", "10", "Yes", "$ 28.00", "$ 41"],
        ["cable inalambrico 29 mts", "SKU-AEDS29", "VE29", "Devices/Cases", "39", "29", "10", "No", "$ 29.00", "$ 42"],
        ["cable inalambrico 30 mts", "SKU-AEDS30", "VE30", "Devices/Cases", "40", "30", "10", "No", "$ 30.00", "$ 43"],
        ["cable inalambrico 31 mts", "SKU-AEDS31", "VE31", "Devices/Cases", "41", "31", "10", "Yes", "$ 31.00", "$ 44"],
        ["cable inalambrico 32 mts", "SKU-AEDS32", "VE32", "Devices/Cases", "42", "32", "10", "No", "$ 32.00", "$ 45"],
        ["cable inalambrico 33 mts", "SKU-AEDS33", "VE33", "Devices/Cases", "43", "33", "10", "No", "$ 33.00", "$ 46"],
        ["cable inalambrico 34 mts", "SKU-AEDS34", "VE34", "Devices/Cases", "44", "34", "10", "No", "$ 34.00", "$ 47"],
        ["cable inalambrico 35 mts", "SKU-AEDS35", "VE35", "Devices/Cases", "45", "35", "10", "No", "$ 35.00", "$ 48"],
        ["cable inalambrico 36 mts", "SKU-AEDS36", "VE36", "Devices/Cases", "46", "36", "10", "No", "$ 36.00", "$ 49"],
        ["cable inalambrico 37 mts", "SKU-AEDS37", "VE37", "Devices/Cases", "47", "37", "10", "Yes", "$ 37.00", "$ 50"],
        ["cable inalambrico 38 mts", "SKU-AEDS38", "VE38", "Devices/Cases", "48", "38", "10", "No", "$ 38.00", "$ 51"],
        ["cable inalambrico 39 mts", "SKU-AEDS39", "VE39", "Devices/Cases", "49", "39", "10", "Yes", "$ 39.00", "$ 52"],
        ["cable inalambrico 40 mts", "SKU-AEDS40", "VE40", "Devices/Cases", "50", "40", "10", "No", "$ 40.00", "$ 53"],
        ["cable inalambrico 41 mts", "SKU-AEDS41", "VE41", "Devices/Cases", "51", "41", "10", "No", "$ 41.00", "$ 54"],
        ["cable inalambrico 42 mts", "SKU-AEDS42", "VE42", "Devices/Cases", "52", "42", "10", "Yes", "$ 42.00", "$ 55"],
        ["cable inalambrico 43 mts", "SKU-AEDS43", "VE43", "Devices/Cases", "53", "43", "10", "Yes", "$ 43.00", "$ 56"],
        ["cable inalambrico 44 mts", "SKU-AEDS44", "VE44", "Devices/Cases", "54", "44", "10", "No", "$ 44.00", "$ 57"],
        ["cable inalambrico 45 mts", "SKU-AEDS45", "VE45", "Devices/Cases", "55", "45", "10", "Yes", "$ 45.00", "$ 58"],
        ["cable inalambrico 46 mts", "SKU-AEDS46", "VE46", "Devices/Cases", "56", "46", "10", "No", "$ 46.00", "$ 59"],
        ["cable inalambrico 47 mts", "SKU-AEDS47", "VE47", "Devices/Cases", "57", "47", "10", "No", "$ 47.00", "$ 60"],
        ["cable inalambrico 48 mts", "SKU-AEDS48", "VE48", "Devices/Cases", "58", "48", "10", "Yes", "$ 48.00", "$ 61"],
        ["cable inalambrico 49 mts", "SKU-AEDS49", "VE49", "Devices/Cases", "59", "49", "10", "No", "$ 49.00", "$ 62"],
        ["cable inalambrico 50 mts", "SKU-AEDS50", "VE50", "Devices/Cases", "60", "50", "10", "Yes", "$ 50.00", "$ 63"],
        ["cable inalambrico 51 mts", "SKU-AEDS51", "VE51", "Devices/Cases", "61", "51", "10", "Yes", "$ 51.00", "$ 64"],
        ["cable inalambrico 52 mts", "SKU-AEDS52", "VE52", "Devices/Cases", "62", "52", "10", "Yes", "$ 52.00", "$ 65"],
        ["cable inalambrico 53 mts", "SKU-AEDS53", "VE53", "Devices/Cases", "63", "53", "10", "No", "$ 53.00", "$ 66"],
        ["cable inalambrico 54 mts", "SKU-AEDS54", "VE54", "Devices/Cases", "64", "54", "10", "No", "$ 54.00", "$ 67"],
        ["cable inalambrico 55 mts", "SKU-AEDS55", "VE55", "Devices/Cases", "65", "55", "10", "No", "$ 55.00", "$ 68"],
        ["cable inalambrico 56 mts", "SKU-AEDS56", "VE56", "Devices/Cases", "66", "56", "10", "Yes", "$ 56.00", "$ 69"],
        ["cable inalambrico 57 mts", "SKU-AEDS57", "VE57", "Devices/Cases", "67", "57", "10", "Yes", "$ 57.00", "$ 70"],
        ["cable inalambrico 58 mts", "SKU-AEDS58", "VE58", "Devices/Cases", "68", "58", "10", "Yes", "$ 58.00", "$ 71"],
        ["cable inalambrico 59 mts", "SKU-AEDS59", "VE59", "Devices/Cases", "69", "59", "10", "Yes", "$ 59.00", "$ 72"],
        ["cable inalambrico 60 mts", "SKU-AEDS60", "VE60", "Devices/Cases", "70", "60", "10", "Yes", "$ 60.00", "$ 73"],
        ["cable inalambrico 61 mts", "SKU-AEDS61", "VE61", "Devices/Cases", "71", "61", "10", "No", "$ 61.00", "$ 74"],
        ["cable inalambrico 62 mts", "SKU-AEDS62", "VE62", "Devices/Cases", "72", "62", "10", "No", "$ 62.00", "$ 75"],
        ["cable inalambrico 63 mts", "SKU-AEDS63", "VE63", "Devices/Cases", "73", "63", "10", "Yes", "$ 63.00", "$ 76"],
        ["cable inalambrico 64 mts", "SKU-AEDS64", "VE64", "Devices/Cases", "74", "64", "10", "No", "$ 64.00", "$ 77"],
        ["cable inalambrico 65 mts", "SKU-AEDS65", "VE65", "Devices/Cases", "75", "65", "10", "Yes", "$ 65.00", "$ 78"],
        ["cable inalambrico 66 mts", "SKU-AEDS66", "VE66", "Devices/Cases", "76", "66", "10", "Yes", "$ 66.00", "$ 79"],
        ["cable inalambrico 67 mts", "SKU-AEDS67", "VE67", "Devices/Cases", "77", "67", "10", "Yes", "$ 67.00", "$ 80"],
        ["cable inalambrico 68 mts", "SKU-AEDS68", "VE68", "Devices/Cases", "78", "68", "10", "No", "$ 68.00", "$ 81"],
        ["cable inalambrico 69 mts", "SKU-AEDS69", "VE69", "Devices/Cases", "79", "69", "10", "No", "$ 69.00", "$ 82"],
        ["cable inalambrico 70 mts", "SKU-AEDS70", "VE70", "Devices/Cases", "80", "70", "10", "No", "$ 70.00", "$ 83"],
        ["cable inalambrico 71 mts", "SKU-AEDS71", "VE71", "Devices/Cases", "81", "71", "10", "No", "$ 71.00", "$ 84"],
        ["cable inalambrico 72 mts", "SKU-AEDS72", "VE72", "Devices/Cases", "82", "72", "10", "No", "$ 72.00", "$ 85"],
        ["cable inalambrico 73 mts", "SKU-AEDS73", "VE73", "Devices/Cases", "83", "73", "10", "No", "$ 73.00", "$ 86"],
        ["cable inalambrico 74 mts", "SKU-AEDS74", "VE74", "Devices/Cases", "84", "74", "10", "No", "$ 74.00", "$ 87"],
        ["cable inalambrico 75 mts", "SKU-AEDS75", "VE75", "Devices/Cases", "85", "75", "10", "Yes", "$ 75.00", "$ 88"],
        ["cable inalambrico 76 mts", "SKU-AEDS76", "VE76", "Devices/Cases", "86", "76", "10", "No", "$ 76.00", "$ 89"],
        ["cable inalambrico 77 mts", "SKU-AEDS77", "VE77", "Devices/Cases", "87", "77", "10", "Yes", "$ 77.00", "$ 90"],
        ["cable inalambrico 78 mts", "SKU-AEDS78", "VE78", "Devices/Cases", "88", "78", "10", "No", "$ 78.00", "$ 91"],
        ["cable inalambrico 79 mts", "SKU-AEDS79", "VE79", "Devices/Cases", "89", "79", "10", "No", "$ 79.00", "$ 92"],
        ["cable inalambrico 80 mts", "SKU-AEDS80", "VE80", "Devices/Cases", "90", "80", "10", "Yes", "$ 80.00", "$ 93"],
        ["cable inalambrico 81 mts", "SKU-AEDS81", "VE81", "Devices/Cases", "91", "81", "10", "No", "$ 81.00", "$ 94"],
        ["cable inalambrico 82 mts", "SKU-AEDS82", "VE82", "Devices/Cases", "92", "82", "10", "Yes", "$ 82.00", "$ 95"],
        ["cable inalambrico 83 mts", "SKU-AEDS83", "VE83", "Devices/Cases", "93", "83", "10", "No", "$ 83.00", "$ 96"],
        ["cable inalambrico 84 mts", "SKU-AEDS84", "VE84", "Devices/Cases", "94", "84", "10", "Yes", "$ 84.00", "$ 97"],
        ["cable inalambrico 85 mts", "SKU-AEDS85", "VE85", "Devices/Cases", "95", "85", "10", "No", "$ 85.00", "$ 98"],
        ["cable inalambrico 86 mts", "SKU-AEDS86", "VE86", "Devices/Cases", "96", "86", "10", "Yes", "$ 86.00", "$ 99"],
        ["cable inalambrico 87 mts", "SKU-AEDS87", "VE87", "Devices/Cases", "97", "87", "10", "Yes", "$ 87.00", "$ 100"],
        ["cable inalambrico 88 mts", "SKU-AEDS88", "VE88", "Devices/Cases", "98", "88", "10", "No", "$ 88.00", "$ 101"],
        ["cable inalambrico 89 mts", "SKU-AEDS89", "VE89", "Devices/Cases", "99", "89", "10", "No", "$ 89.00", "$ 102"],
        ["cable inalambrico 90 mts", "SKU-AEDS90", "VE90", "Devices/Cases", "100", "90", "10", "Yes", "$ 90.00", "$ 103"],
        ["cable inalambrico 91 mts", "SKU-AEDS91", "VE91", "Devices/Cases", "101", "91", "10", "Yes", "$ 91.00", "$ 104"],
        ["cable inalambrico 92 mts", "SKU-AEDS92", "VE92", "Devices/Cases", "102", "92", "10", "No", "$ 92.00", "$ 105"],
        ["cable inalambrico 93 mts", "SKU-AEDS93", "VE93", "Devices/Cases", "103", "93", "10", "Yes", "$ 93.00", "$ 106"],
        ["cable inalambrico 94 mts", "SKU-AEDS94", "VE94", "Devices/Cases", "104", "94", "10", "Yes", "$ 94.00", "$ 107"],
        ["cable inalambrico 95 mts", "SKU-AEDS95", "VE95", "Devices/Cases", "105", "95", "10", "No", "$ 95.00", "$ 108"],
        ["cable inalambrico 96 mts", "SKU-AEDS96", "VE96", "Devices/Cases", "106", "96", "10", "No", "$ 96.00", "$ 109"],
        ["cable inalambrico 97 mts", "SKU-AEDS97", "VE97", "Devices/Cases", "107", "97", "10", "No", "$ 97.00", "$ 110"],
        ["cable inalambrico 98 mts", "SKU-AEDS98", "VE98", "Devices/Cases", "108", "98", "10", "No", "$ 98.00", "$ 111"],
        ["cable inalambrico 99 mts", "SKU-AEDS99", "VE99", "Devices/Cases", "109", "99", "10", "No", "$ 99.00", "$ 112"],
        ["cable inalambrico 100 mts", "SKU-AEDS100", "VE100", "Devices/Cases", "110", "100", "10", "No", "$ 100.00", "$ 113"],
        ["cable inalambrico 101 mts", "SKU-AEDS101", "VE101", "Devices/Cases", "111", "101", "10", "Yes", "$ 101.00", "$ 114"],
        ["cable inalambrico 102 mts", "SKU-AEDS102", "VE102", "Devices/Cases", "112", "102", "10", "No", "$ 102.00", "$ 115"],
        ["cable inalambrico 103 mts", "SKU-AEDS103", "VE103", "Devices/Cases", "113", "103", "10", "Yes", "$ 103.00", "$ 116"],
        ["cable inalambrico 104 mts", "SKU-AEDS104", "VE104", "Devices/Cases", "114", "104", "10", "No", "$ 104.00", "$ 117"],
        ["cable inalambrico 105 mts", "SKU-AEDS105", "VE105", "Devices/Cases", "115", "105", "10", "No", "$ 105.00", "$ 118"],
        ["cable inalambrico 106 mts", "SKU-AEDS106", "VE106", "Devices/Cases", "116", "106", "10", "No", "$ 106.00", "$ 119"],
        ["cable inalambrico 107 mts", "SKU-AEDS107", "VE107", "Devices/Cases", "117", "107", "10", "Yes", "$ 107.00", "$ 120"],
        ["cable inalambrico 108 mts", "SKU-AEDS108", "VE108", "Devices/Cases", "118", "108", "10", "Yes", "$ 108.00", "$ 121"],
        ["cable inalambrico 109 mts", "SKU-AEDS109", "VE109", "Devices/Cases", "119", "109", "10", "No", "$ 109.00", "$ 122"],
        ["cable inalambrico 110 mts", "SKU-AEDS110", "VE110", "Devices/Cases", "120", "110", "10", "Yes", "$ 110.00", "$ 123"],
        ["cable inalambrico 111 mts", "SKU-AEDS111", "VE111", "Devices/Cases", "121", "111", "10", "No", "$ 111.00", "$ 124"],
        ["cable inalambrico 112 mts", "SKU-AEDS112", "VE112", "Devices/Cases", "122", "112", "10", "No", "$ 112.00", "$ 125"],
        ["cable inalambrico 113 mts", "SKU-AEDS113", "VE113", "Devices/Cases", "123", "113", "10", "Yes", "$ 113.00", "$ 126"],
        ["cable inalambrico 114 mts", "SKU-AEDS114", "VE114", "Devices/Cases", "124", "114", "10", "Yes", "$ 114.00", "$ 127"],
        ["cable inalambrico 115 mts", "SKU-AEDS115", "VE115", "Devices/Cases", "125", "115", "10", "No", "$ 115.00", "$ 128"],
        ["cable inalambrico 116 mts", "SKU-AEDS116", "VE116", "Devices/Cases", "126", "116", "10", "No", "$ 116.00", "$ 129"],
        ["cable inalambrico 117 mts", "SKU-AEDS117", "VE117", "Devices/Cases", "127", "117", "10", "No", "$ 117.00", "$ 130"],
        ["cable inalambrico 118 mts", "SKU-AEDS118", "VE118", "Devices/Cases", "128", "118", "10", "No", "$ 118.00", "$ 131"],
        ["cable inalambrico 119 mts", "SKU-AEDS119", "VE119", "Devices/Cases", "129", "119", "10", "No", "$ 119.00", "$ 132"],
        ["cable inalambrico 120 mts", "SKU-AEDS120", "VE120", "Devices/Cases", "130", "120", "10", "Yes", "$ 120.00", "$ 133"],
        ["cable inalambrico 121 mts", "SKU-AEDS121", "VE121", "Devices/Cases", "131", "121", "10", "No", "$ 121.00", "$ 134"],
        ["cable inalambrico 122 mts", "SKU-AEDS122", "VE122", "Devices/Cases", "132", "122", "10", "Yes", "$ 122.00", "$ 135"],
        ["cable inalambrico 123 mts", "SKU-AEDS123", "VE123", "Devices/Cases", "133", "123", "10", "No", "$ 123.00", "$ 136"],
        ["cable inalambrico 124 mts", "SKU-AEDS124", "VE124", "Devices/Cases", "134", "124", "10", "Yes", "$ 124.00", "$ 137"],
        ["cable inalambrico 125 mts", "SKU-AEDS125", "VE125", "Devices/Cases", "135", "125", "10", "No", "$ 125.00", "$ 138"],
        ["cable inalambrico 126 mts", "SKU-AEDS126", "VE126", "Devices/Cases", "136", "126", "10", "Yes", "$ 126.00", "$ 139"],
        ["cable inalambrico 127 mts", "SKU-AEDS127", "VE127", "Devices/Cases", "137", "127", "10", "Yes", "$ 127.00", "$ 140"],
        ["cable inalambrico 128 mts", "SKU-AEDS128", "VE128", "Devices/Cases", "138", "128", "10", "Yes", "$ 128.00", "$ 141"],
        ["cable inalambrico 129 mts", "SKU-AEDS129", "VE129", "Devices/Cases", "139", "129", "10", "No", "$ 129.00", "$ 142"],
        ["cable inalambrico 130 mts", "SKU-AEDS130", "VE130", "Devices/Cases", "140", "130", "10", "No", "$ 130.00", "$ 143"],
        ["cable inalambrico 131 mts", "SKU-AEDS131", "VE131", "Devices/Cases", "141", "131", "10", "Yes", "$ 131.00", "$ 144"],
        ["cable inalambrico 132 mts", "SKU-AEDS132", "VE132", "Devices/Cases", "142", "132", "10", "No", "$ 132.00", "$ 145"],
        ["cable inalambrico 133 mts", "SKU-AEDS133", "VE133", "Devices/Cases", "143", "133", "10", "Yes", "$ 133.00", "$ 146"],
        ["cable inalambrico 134 mts", "SKU-AEDS134", "VE134", "Devices/Cases", "144", "134", "10", "No", "$ 134.00", "$ 147"],
        ["cable inalambrico 135 mts", "SKU-AEDS135", "VE135", "Devices/Cases", "145", "135", "10", "No", "$ 135.00", "$ 148"],
        ["cable inalambrico 136 mts", "SKU-AEDS136", "VE136", "Devices/Cases", "146", "136", "10", "Yes", "$ 136.00", "$ 149"],
        ["cable inalambrico 137 mts", "SKU-AEDS137", "VE137", "Devices/Cases", "147", "137", "10", "Yes", "$ 137.00", "$ 150"],
        ["cable inalambrico 138 mts", "SKU-AEDS138", "VE138", "Devices/Cases", "148", "138", "10", "No", "$ 138.00", "$ 151"],
        ["cable inalambrico 139 mts", "SKU-AEDS139", "VE139", "Devices/Cases", "149", "139", "10", "No", "$ 139.00", "$ 152"],
        ["cable inalambrico 140 mts", "SKU-AEDS140", "VE140", "Devices/Cases", "150", "140", "10", "Yes", "$ 140.00", "$ 153"],
        ["cable inalambrico 141 mts", "SKU-AEDS141", "VE141", "Devices/Cases", "151", "141", "10", "Yes", "$ 141.00", "$ 154"],
        ["cable inalambrico 142 mts", "SKU-AEDS142", "VE142", "Devices/Cases", "152", "142", "10", "Yes", "$ 142.00", "$ 155"],
        ["cable inalambrico 143 mts", "SKU-AEDS143", "VE143", "Devices/Cases", "153", "143", "10", "No", "$ 143.00", "$ 156"],
        ["cable inalambrico 144 mts", "SKU-AEDS144", "VE144", "Devices/Cases", "154", "144", "10", "No", "$ 144.00", "$ 157"],
        ["cable inalambrico 145 mts", "SKU-AEDS145", "VE145", "Devices/Cases", "155", "145", "10", "No", "$ 145.00", "$ 158"],
        ["cable inalambrico 146 mts", "SKU-AEDS146", "VE146", "Devices/Cases", "156", "146", "10", "Yes", "$ 146.00", "$ 159"],
        ["cable inalambrico 147 mts", "SKU-AEDS147", "VE147", "Devices/Cases", "157", "147", "10", "No", "$ 147.00", "$ 160"],
        ["cable inalambrico 148 mts", "SKU-AEDS148", "VE148", "Devices/Cases", "158", "148", "10", "No", "$ 148.00", "$ 161"],
        ["cable inalambrico 149 mts", "SKU-AEDS149", "VE149", "Devices/Cases", "159", "149", "10", "Yes", "$ 149.00", "$ 162"],
        ["cable inalambrico 150 mts", "SKU-AEDS150", "VE150", "Devices/Cases", "160", "150", "10", "Yes", "$ 150.00", "$ 163"],
        ["cable inalambrico 151 mts", "SKU-AEDS151", "VE151", "Devices/Cases", "161", "151", "10", "No", "$ 151.00", "$ 164"],
        ["cable inalambrico 152 mts", "SKU-AEDS152", "VE152", "Devices/Cases", "162", "152", "10", "No", "$ 152.00", "$ 165"],
        ["cable inalambrico 153 mts", "SKU-AEDS153", "VE153", "Devices/Cases", "163", "153", "10", "Yes", "$ 153.00", "$ 166"],
        ["cable inalambrico 154 mts", "SKU-AEDS154", "VE154", "Devices/Cases", "164", "154", "10", "Yes", "$ 154.00", "$ 167"],
        ["cable inalambrico 155 mts", "SKU-AEDS155", "VE155", "Devices/Cases", "165", "155", "10", "No", "$ 155.00", "$ 168"],
        ["cable inalambrico 156 mts", "SKU-AEDS156", "VE156", "Devices/Cases", "166", "156", "10", "No", "$ 156.00", "$ 169"],
        ["cable inalambrico 157 mts", "SKU-AEDS157", "VE157", "Devices/Cases", "167", "157", "10", "No", "$ 157.00", "$ 170"],
        ["cable inalambrico 158 mts", "SKU-AEDS158", "VE158", "Devices/Cases", "168", "158", "10", "Yes", "$ 158.00", "$ 171"],
        ["cable inalambrico 159 mts", "SKU-AEDS159", "VE159", "Devices/Cases", "169", "159", "10", "Yes", "$ 159.00", "$ 172"],
        ["cable inalambrico 160 mts", "SKU-AEDS160", "VE160", "Devices/Cases", "170", "160", "10", "No", "$ 160.00", "$ 173"],
        ["cable inalambrico 161 mts", "SKU-AEDS161", "VE161", "Devices/Cases", "171", "161", "10", "No", "$ 161.00", "$ 174"],
        ["cable inalambrico 162 mts", "SKU-AEDS162", "VE162", "Devices/Cases", "172", "162", "10", "Yes", "$ 162.00", "$ 175"],
        ["cable inalambrico 163 mts", "SKU-AEDS163", "VE163", "Devices/Cases", "173", "163", "10", "No", "$ 163.00", "$ 176"],
        ["cable inalambrico 164 mts", "SKU-AEDS164", "VE164", "Devices/Cases", "174", "164", "10", "No", "$ 164.00", "$ 177"],
        ["cable inalambrico 165 mts", "SKU-AEDS165", "VE165", "Devices/Cases", "175", "165", "10", "Yes", "$ 165.00", "$ 178"],
        ["cable inalambrico 166 mts", "SKU-AEDS166", "VE166", "Devices/Cases", "176", "166", "10", "No", "$ 166.00", "$ 179"],
        ["cable inalambrico 167 mts", "SKU-AEDS167", "VE167", "Devices/Cases", "177", "167", "10", "Yes", "$ 167.00", "$ 180"],
        ["cable inalambrico 168 mts", "SKU-AEDS168", "VE168", "Devices/Cases", "178", "168", "10", "No", "$ 168.00", "$ 181"],
        ["cable inalambrico 169 mts", "SKU-AEDS169", "VE169", "Devices/Cases", "179", "169", "10", "Yes", "$ 169.00", "$ 182"],
        ["cable inalambrico 170 mts", "SKU-AEDS170", "VE170", "Devices/Cases", "180", "170", "10", "No", "$ 170.00", "$ 183"],
        ["cable inalambrico 171 mts", "SKU-AEDS171", "VE171", "Devices/Cases", "181", "171", "10", "Yes", "$ 171.00", "$ 184"],
        ["cable inalambrico 172 mts", "SKU-AEDS172", "VE172", "Devices/Cases", "182", "172", "10", "Yes", "$ 172.00", "$ 185"],
        ["cable inalambrico 173 mts", "SKU-AEDS173", "VE173", "Devices/Cases", "183", "173", "10", "No", "$ 173.00", "$ 186"],
        ["cable inalambrico 174 mts", "SKU-AEDS174", "VE174", "Devices/Cases", "184", "174", "10", "Yes", "$ 174.00", "$ 187"],
        ["cable inalambrico 175 mts", "SKU-AEDS175", "VE175", "Devices/Cases", "185", "175", "10", "No", "$ 175.00", "$ 188"],
        ["cable inalambrico 176 mts", "SKU-AEDS176", "VE176", "Devices/Cases", "186", "176", "10", "Yes", "$ 176.00", "$ 189"],
        ["cable inalambrico 177 mts", "SKU-AEDS177", "VE177", "Devices/Cases", "187", "177", "10", "No", "$ 177.00", "$ 190"],
        ["cable inalambrico 178 mts", "SKU-AEDS178", "VE178", "Devices/Cases", "188", "178", "10", "Yes", "$ 178.00", "$ 191"],
        ["cable inalambrico 179 mts", "SKU-AEDS179", "VE179", "Devices/Cases", "189", "179", "10", "Yes", "$ 179.00", "$ 192"],
        ["cable inalambrico 180 mts", "SKU-AEDS180", "VE180", "Devices/Cases", "190", "180", "10", "No", "$ 180.00", "$ 193"],
        ["cable inalambrico 181 mts", "SKU-AEDS181", "VE181", "Devices/Cases", "191", "181", "10", "No", "$ 181.00", "$ 194"],
        ["cable inalambrico 182 mts", "SKU-AEDS182", "VE182", "Devices/Cases", "192", "182", "10", "Yes", "$ 182.00", "$ 195"],
        ["cable inalambrico 183 mts", "SKU-AEDS183", "VE183", "Devices/Cases", "193", "183", "10", "No", "$ 183.00", "$ 196"],
        ["cable inalambrico 184 mts", "SKU-AEDS184", "VE184", "Devices/Cases", "194", "184", "10", "No", "$ 184.00", "$ 197"],
        ["cable inalambrico 185 mts", "SKU-AEDS185", "VE185", "Devices/Cases", "195", "185", "10", "Yes", "$ 185.00", "$ 198"],
        ["cable inalambrico 186 mts", "SKU-AEDS186", "VE186", "Devices/Cases", "196", "186", "10", "No", "$ 186.00", "$ 199"],
        ["cable inalambrico 187 mts", "SKU-AEDS187", "VE187", "Devices/Cases", "197", "187", "10", "No", "$ 187.00", "$ 200"],
        ["cable inalambrico 188 mts", "SKU-AEDS188", "VE188", "Devices/Cases", "198", "188", "10", "Yes", "$ 188.00", "$ 201"],
        ["cable inalambrico 189 mts", "SKU-AEDS189", "VE189", "Devices/Cases", "199", "189", "10", "Yes", "$ 189.00", "$ 202"],
        ["cable inalambrico 190 mts", "SKU-AEDS190", "VE190", "Devices/Cases", "200", "190", "10", "Yes", "$ 190.00", "$ 203"],
        ["cable inalambrico 191 mts", "SKU-AEDS191", "VE191", "Devices/Cases", "201", "191", "10", "No", "$ 191.00", "$ 204"],
        ["cable inalambrico 192 mts", "SKU-AEDS192", "VE192", "Devices/Cases", "202", "192", "10", "Yes", "$ 192.00", "$ 205"],
        ["cable inalambrico 193 mts", "SKU-AEDS193", "VE193", "Devices/Cases", "203", "193", "10", "Yes", "$ 193.00", "$ 206"],
        ["cable inalambrico 194 mts", "SKU-AEDS194", "VE194", "Devices/Cases", "204", "194", "10", "No", "$ 194.00", "$ 207"],
        ["cable inalambrico 195 mts", "SKU-AEDS195", "VE195", "Devices/Cases", "205", "195", "10", "Yes", "$ 195.00", "$ 208"],
        ["cable inalambrico 196 mts", "SKU-AEDS196", "VE196", "Devices/Cases", "206", "196", "10", "No", "$ 196.00", "$ 209"],
        ["cable inalambrico 197 mts", "SKU-AEDS197", "VE197", "Devices/Cases", "207", "197", "10", "Yes", "$ 197.00", "$ 210"],
        ["cable inalambrico 198 mts", "SKU-AEDS198", "VE198", "Devices/Cases", "208", "198", "10", "No", "$ 198.00", "$ 211"],
        ["cable inalambrico 199 mts", "SKU-AEDS199", "VE199", "Devices/Cases", "209", "199", "10", "Yes", "$ 199.00", "$ 212"],
        ["cable inalambrico 200 mts", "SKU-AEDS200", "VE200", "Devices/Cases", "210", "200", "10", "No", "$ 200.00", "$ 213"],
    ]
    const { t, i18n } = useTranslation()

    useEffect(() => {
        const savedLang = localStorage.getItem("language") || "en";
        i18n.changeLanguage(savedLang);
    }, [i18n]);

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language)
        console.log("Changing language to: " + language)
    }

    const onSearchChange = (search: string) => {
        console.log("JL - Buscando: " + search)
    }

    return (
        <div className={screenContainer}>
            <Navbar />
            <section className={[sectionContainer, sectionAllHeight].join(" ")}>
                <ScreenHeaderComponent
                    title="Manage your inventory"
                    subtitle="Keep track of the items in your inventory"
                    onSearchChange={onSearchChange}
                />

                <div className={headerToolbarSpacer}></div>

                <TableToolbarComponent
                    onRefresh={() => { }}
                    onDownload={() => { }}
                    onExport={() => { }}
                    onAdd={() => { }}
                    filters={[
                        <FilterComponent
                            items={["Paid", "Not Paid"]}
                            itemsSelected={[]}
                            placeholder={"Payment status"}
                            onSelectItems={() => { }}
                        />
                    ]}
                />

                <div className={tableVerticalSpacer}></div>

                <TableComponent
                    columns={columna}
                    rows={filas}
                />

                <div className={tableVerticalSpacer}></div>

                <div className={screenFooter}>
                    <div className={purpleBadge}>
                        <p># of items  | 10,293</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomeComponent;