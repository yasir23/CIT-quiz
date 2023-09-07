#!/usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
let playerName;
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow('Who Wants To Be A JavaScript Millionaire? \n');
    await sleep();
    rainbowTitle.stop();
    console.log(`
    ${chalk.bgBlue('HOW TO PLAY')} 
    Its your exam of CIT MS word, MS Excel, Computer basic.
    If you get any question wrong your marks will be ${chalk.bgRed('deducted')}
    So get all the questions right...

  `);
}
let playerScore = 0;
async function handleAnswer(isCorrect) {
    if (isCorrect) {
        playerScore++; // Increase the player's score for a correct answer
    }
}
async function askName() {
    const answers = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'What is your name?',
        default() {
            return 'Player';
        },
    });
    playerName = answers.player_name;
}
function winner() {
    console.clear();
    console.log(`Your final score: ${playerScore} / 75`); // Display the player's final score
    if (playerScore > 40) {
        figlet(`Congrats , ${playerName} !\n DONE BASIC COMPUTER EXAM`, (err, data) => console.log(gradient.pastel.multiline(data) + '\n'));
    }
    else {
        console.log('You are fail in CIT Exam!');
    }
    ;
    process.exit(0);
}
async function question1() {
    const answers = await inquirer.prompt({
        name: 'question_1',
        type: 'list',
        message: 'From which manu you can insert Header and Footer.\n',
        choices: [
            'Insert menu',
            'View menu',
            'Format menu',
            'Tools menu',
        ],
    });
    return;
    handleAnswer(answers.question_1 === 'Insert menu');
}
async function question2() {
    const answers = await inquirer.prompt({
        name: 'question_2',
        type: 'list',
        message: 'Bullets and Numbering is in __________ tab. \n',
        choices: ['Home tab', 'insert tab', 'pagelayout tab', 'view tab'],
    });
    return handleAnswer(answers.question_2 === 'Home');
}
async function question3() {
    const answers = await inquirer.prompt({
        name: 'question_3',
        type: 'list',
        message: `To open a existing document click on the __________ and then select Open.\n`,
        choices: ['MS office button', 'Quick Access Toolbar', 'Document Views', 'Ribbon'],
    });
    return handleAnswer(answers.question_3 === 'Ms office button');
}
async function question4() {
    const answers = await inquirer.prompt({
        name: 'question_4',
        type: 'list',
        message: 'Cut copy and paste is in __________ Group in the Home tab.\n',
        choices: [
            'Font',
            'Page setup',
            'Clipboard',
            'Editing', // Correct
        ],
    });
    return handleAnswer(answers.question_4 === 'Clipboard');
}
async function question5() {
    const answers = await inquirer.prompt({
        name: 'question_5',
        type: 'list',
        message: '____________ is used to convert from upper case to lower case and vice versa.\n',
        choices: ['Toggle case', 'Sentence case', 'Lower case', 'Upper case'],
    });
    return handleAnswer(answers.question_5 === 'Toggle case');
}
async function question6() {
    const answers = await inquirer.prompt({
        name: 'question_6',
        type: 'list',
        message: 'what is the smallest and largest font size available in font size tool on formatting.\n',
        choices: ['8 and 72', '8 and 64', '12 and 72', 'Nome of the above'],
    });
    return handleAnswer(answers.question_6 === '8 and 72');
}
async function question7() {
    const answers = await inquirer.prompt({
        name: 'question_7',
        type: 'list',
        message: 'which of the following is not valid version of MS office\n',
        choices: ['office XP', 'office vista', 'office 2007', 'None of the above'],
    });
    return handleAnswer(answers.question_7 === 'office vista');
}
async function question8() {
    const answers = await inquirer.prompt({
        name: 'question_8',
        type: 'list',
        message: 'Background color or effects applied on a document is not visible in:\n',
        choices: ['Web layout view', 'print layout view', 'reading view', 'print preview'],
    });
    return handleAnswer(answers.question_8 === 'print preview');
}
async function question9() {
    const answers = await inquirer.prompt({
        name: 'question_9',
        type: 'list',
        message: 'Borders can be applied to:\n',
        choices: ['cells', 'paragraph', 'text', 'all of the above'],
    });
    return handleAnswer(answers.question_9 === 'all of the above');
}
async function question10() {
    const answers = await inquirer.prompt({
        name: 'question_10',
        type: 'list',
        message: 'which of the following is not a type of page margin\n',
        choices: ['left', 'right', 'center', 'top'],
    });
    return handleAnswer(answers.question_10 === 'center');
}
async function question11() {
    const answers = await inquirer.prompt({
        name: 'question_11',
        type: 'list',
        message: 'what is the default left margin in word 2016 \n',
        choices: ['1"', '1.25"', '1.5"', '2"'],
    });
    return handleAnswer(answers.question_11 === '1"');
}
async function question12() {
    const answers = await inquirer.prompt({
        name: 'question_12',
        type: 'list',
        message: 'portrait and landscape are\n',
        choices: ['page orientation', 'paper size', 'page layout', 'all of above'],
    });
    return handleAnswer(answers.question_12 === 'page orientation');
}
async function question13() {
    const answers = await inquirer.prompt({
        name: 'question_13',
        type: 'list',
        message: 'how are data organized in a spread sheet?\n',
        choices: ['lines and spaces', 'layers and planes', 'rows and columns', 'heights and widths'],
    });
    return handleAnswer(answers.question_13 === 'rows and columns');
}
async function question14() {
    const answers = await inquirer.prompt({
        name: 'question_14',
        type: 'list',
        message: 'Excel files have a default extension of \n',
        choices: ['Xls', 'Xlw', 'Wkl', '123'],
    });
    return handleAnswer(answers.question_14 === 'Xls');
}
async function question15() {
    const answers = await inquirer.prompt({
        name: 'question_15',
        type: 'list',
        message: 'an excel workbook is a collection of:\n',
        choices: ['workbooks', 'worksheets', 'charts', 'worksheets and charts'],
    });
    return handleAnswer(answers.question_15 === 'worksheets and charts');
}
async function question16() {
    const answers = await inquirer.prompt({
        name: 'question_16',
        type: 'list',
        message: 'In a worksheet you can select \n',
        choices: ['the entire worksheet', 'Rows', 'Columns', 'all of the above'],
    });
    return handleAnswer(answers.question_16 === 'all of the above');
}
async function question17() {
    const answers = await inquirer.prompt({
        name: 'question_17',
        type: 'list',
        message: 'Hyperlinks can be:\n',
        choices: ['text', 'drawing objects', 'pictures', 'all of the above'],
    });
    return handleAnswer(answers.question_17 === 'all of the above');
}
async function question18() {
    const answers = await inquirer.prompt({
        name: 'question_18',
        type: 'list',
        message: 'To drag the selected range of data to another worksheet in the same workbook use the:\n',
        choices: ['tab key', 'alt key', 'shift key', 'ctrl key'],
    });
    return handleAnswer(answers.question_18 === 'ctrl key');
}
async function question19() {
    const answers = await inquirer.prompt({
        name: 'question_19',
        type: 'list',
        message: 'excel uniquely identifies cells within a worksheet with a cell name:\n',
        choices: ['cell names', 'column numbers and row letters', 'column letters and row numbers', 'cell locator coordinates'],
    });
    return handleAnswer(answers.question_19 === 'column letters and row numbers');
}
async function question20() {
    const answers = await inquirer.prompt({
        name: 'question_20',
        type: 'list',
        message: 'A worksheet range is a: \n',
        choices: ['A command used for data modeling', 'a range of values such as from 23 to 234', 'a group of cells', 'a group of worksheets'],
    });
    return handleAnswer(answers.question_20 === 'a group of cells');
}
async function question21() {
    const answers = await inquirer.prompt({
        name: 'question_21',
        type: 'list',
        message: 'which symbol must all formula begin with:\n',
        choices: ['+', '=', '(', '@'],
    });
    return handleAnswer(answers.question_21 === '=');
}
async function question22() {
    const answers = await inquirer.prompt({
        name: 'question_22',
        type: 'list',
        message: 'which of the following format you can decide to apply or not in Auto format dialog box\n',
        choices: ['number format', 'border format', 'font format', 'all of the above'],
    });
    return handleAnswer(answers.question_22 === 'all of the above');
}
async function question23() {
    const answers = await inquirer.prompt({
        name: 'question_23',
        type: 'list',
        message: 'which of the following is not the valid zoom percentage in Excel\n',
        choices: ['10', '100', '3000', '400'],
    });
    return handleAnswer(answers.question_23 === '3000');
}
async function question24() {
    const answers = await inquirer.prompt({
        name: 'question_24',
        type: 'list',
        message: 'when you print preview a worksheet\n',
        choices: ['the entire worksheet is displayed', 'the selected range is displayed', 'the active portion of the worksheet is displayed', 'all of the above'],
    });
    return handleAnswer(answers.question_24 === 'memory');
}
async function question25() {
    const answers = await inquirer.prompt({
        name: 'question_25',
        type: 'list',
        message: 'when you use the fill effects in the format data series dialog box, you can not.\n',
        choices: ['you can not rotate text on the chart', 'select a forground color', 'select a pattern', 'select a background color'],
    });
    return handleAnswer(answers.question_25 === 'you can not rotate text on the chart');
}
async function question26() {
    const answers = await inquirer.prompt({
        name: 'question_26',
        type: 'list',
        message: 'comments put in the cell\n',
        choices: ['smart tip', 'cell tip', 'web tip', 'soft tip'],
    });
    return handleAnswer(answers.question_26 === 'cell tip');
}
async function question27() {
    const answers = await inquirer.prompt({
        name: 'question_27',
        type: 'list',
        message: 'which of the following is not the valid data type in Excel.\n',
        choices: ['number', 'character', 'label', 'date/time'],
    });
    return handleAnswer(answers.question_27 === 'character');
}
async function question28() {
    const answers = await inquirer.prompt({
        name: 'question_28',
        type: 'list',
        message: 'In word, the mailing list is known as the ___________\n',
        choices: ['data sheet', 'source', 'data source', 'sheet'],
    });
    return handleAnswer(answers.question_28 === 'data source');
}
async function question29() {
    const answers = await inquirer.prompt({
        name: 'question_29',
        type: 'list',
        message: 'Autocorrect was originally designed to replace _____________ words as you type.\n',
        choices: ['short, repetative', 'grammatical incorrect', 'misspelled', 'none of the above'],
    });
    return handleAnswer(answers.question_29 === 'misspelled');
}
async function question30() {
    const answers = await inquirer.prompt({
        name: 'question_30',
        type: 'list',
        message: 'which of the following is not a font style \n',
        choices: ['bold', 'italics', 'regular', 'superscript'],
    });
    return handleAnswer(answers.question_30 === 'superscript');
}
async function question31() {
    const answers = await inquirer.prompt({
        name: 'question_31',
        type: 'list',
        message: 'if you need to change the type face of the document, which menu will you choose?\n',
        choices: ['edit', 'view', 'format', 'tools'],
    });
    return handleAnswer(answers.question_31 === 'format');
}
async function question32() {
    const answers = await inquirer.prompt({
        name: 'question_32',
        type: 'list',
        message: 'which file format can be added to powerpoint show? \n',
        choices: ['.jpg', '.giv', '.wav', 'all of the above'],
    });
    return handleAnswer(answers.question_32 === 'all of the above');
}
async function question33() {
    const answers = await inquirer.prompt({
        name: 'question_33',
        type: 'list',
        message: 'what is the extention of powerpoint\n',
        choices: ['.exe', '.doc', '.ppt', 'none of the above'],
    });
    return handleAnswer(answers.question_33 === '.ppt');
}
async function question34() {
    const answers = await inquirer.prompt({
        name: 'question_34',
        type: 'list',
        message: 'what is the key to delete the boxes of table after selecting?\n',
        choices: ['alt + F4', 'clt + F4', 'delete', 'backspace'],
    });
    return handleAnswer(answers.question_34 === 'backspace');
}
async function question35() {
    const answers = await inquirer.prompt({
        name: 'question_35',
        type: 'list',
        message: 'For shut down the computer, what is the short cut key? \n',
        choices: ['alt + F5', 'Ctrl + F4', 'ctrl + F4', 'none of the above'],
    });
    return handleAnswer(answers.question_35 === 'ctrl F4');
}
async function question36() {
    const answers = await inquirer.prompt({
        name: 'question_36',
        type: 'list',
        message: 'To full screen the slide in the powerpoint, what is the short cut key?\n',
        choices: ['F6', 'ctrl + F5', 'Alt + F5', 'F5'],
    });
    return handleAnswer(answers.question_36 === 'F5');
}
async function question37() {
    const answers = await inquirer.prompt({
        name: 'question_37',
        type: 'list',
        message: 'which key will not advance the slides in presentation?\n',
        choices: ['the esc key', 'the space bar', 'the enter key', 'the mouse button'],
    });
    return handleAnswer(answers.question_37 === 'the esc key');
}
async function question38() {
    const answers = await inquirer.prompt({
        name: 'question_38',
        type: 'list',
        message: 'which manu provides you options like animation scheme, custom animation, slide transition.\n',
        choices: ['insert menu', 'format menu', 'tools menu', 'slide show menu'],
    });
    return handleAnswer(answers.question_38 === 'slide show menu');
}
async function question39() {
    const answers = await inquirer.prompt({
        name: 'question_39',
        type: 'list',
        message: 'In which menu you find features like slide design, slide layout etc\n',
        choices: ['insert menu', 'format menu', 'tools menu', 'slide show menu'],
    });
    return handleAnswer(answers.question_39 === 'format menu');
}
async function question40() {
    const answers = await inquirer.prompt({
        name: 'question_40',
        type: 'list',
        message: 'the selected design can be applied:\n',
        choices: ['to current slide only', 'to all the slides', 'to all the new presentation you create', 'all of the above'],
    });
    return handleAnswer(answers.question_40 === 'all of the above');
}
async function question41() {
    const answers = await inquirer.prompt({
        name: 'question_41',
        type: 'list',
        message: 'what feature will you use to apply motion effects in between a slide exit and another enters\n',
        choices: ['slide design', 'slide transition', 'animation objects', 'animation scheme'],
    });
    return handleAnswer(answers.question_41 === 'slide transition');
}
async function question42() {
    const answers = await inquirer.prompt({
        name: 'question_42',
        type: 'list',
        message: 'what powerpoint will you use to apply motion effects to different objects of a slide\n',
        choices: ['slide transition', 'slide design', 'animation objects', 'animation scheme'],
    });
    return handleAnswer(answers.question_42 === 'animation scheme');
}
async function question43() {
    const answers = await inquirer.prompt({
        name: 'question_43',
        type: 'list',
        message: 'which short cut key insert a new slide in current presentation?\n',
        choices: ['CTRL + N', 'CTRL + M', 'CTRL + S', 'all of the above'],
    });
    return handleAnswer(answers.question_43 === 'CTRL + M');
}
async function question44() {
    const answers = await inquirer.prompt({
        name: 'question_44',
        type: 'list',
        message: 'which of the following font effect is not available in powerpoint font dialog box.\n',
        choices: ['underline', 'shadow', 'emboss', 'strikethrough'],
    });
    return handleAnswer(answers.question_44 === 'strikethrough');
}
async function question45() {
    const answers = await inquirer.prompt({
        name: 'question_45',
        type: 'list',
        message: 'In a powerpoint presentation\n',
        choices: ['sound clip can be inserted but not movie clip', 'movie clips can be inserted but not sound clips', 'both cannot be inserted', 'both can be inserted'],
    });
    return handleAnswer(answers.question_45 === 'both can be inserted');
}
async function question46() {
    const answers = await inquirer.prompt({
        name: 'question_46',
        type: 'list',
        message: 'from which menu you can access picture, text box, chart etc\n',
        choices: ['file', 'edit', 'insert', 'view'],
    });
    return handleAnswer(answers.question_46 === 'insert');
}
async function question47() {
    const answers = await inquirer.prompt({
        name: 'question_47',
        type: 'list',
        message: 'which command brings you to the first slide of the presentation?\n',
        choices: ['page up', 'next slide show', 'ctrl + Home', 'ctrl + End'],
    });
    return handleAnswer(answers.question_47 === 'ctrl + Home');
}
async function question48() {
    const answers = await inquirer.prompt({
        name: 'question_48',
        type: 'list',
        message: 'which of the following provide the printed copy of your presentation?\n',
        choices: ['outline', 'speaker notes', 'audience handouts', 'all of the above'],
    });
    return handleAnswer(answers.question_48 === 'audience handouts');
}
async function question49() {
    const answers = await inquirer.prompt({
        name: 'question_49',
        type: 'list',
        message: 'Microsoft powerpoint is:\n',
        choices: ['database program', 'spreadsheet program', 'presentation program', 'word processing program'],
    });
    return handleAnswer(answers.question_49 === 'presentation program');
}
async function question50() {
    const answers = await inquirer.prompt({
        name: 'question_50',
        type: 'list',
        message: 'which of the following are the word processing software?\n',
        choices: ['wordperfect', 'easy word', 'ms word', 'all of the above'],
    });
    return handleAnswer(answers.question_50 === 'all of the above');
}
async function question51() {
    const answers = await inquirer.prompt({
        name: 'question_51',
        type: 'list',
        message: '_________ is the at the top of the window and it display the name of the application.\n',
        choices: ['menu bar', 'title bar', 'tool bar', 'tool box'],
    });
    return handleAnswer(answers.question_51 === 'title bar');
}
async function question52() {
    const answers = await inquirer.prompt({
        name: 'question_52',
        type: 'list',
        message: '_________ is displayed below the title bar.\n',
        choices: ['menu bar', 'title bar', 'tool bar', 'tool box'],
    });
    return handleAnswer(answers.question_52 === 'menu bar');
}
async function question53() {
    const answers = await inquirer.prompt({
        name: 'question_53',
        type: 'list',
        message: 'save option is in ________ bar.\n',
        choices: ['menu bar', 'title bar', 'tool bar', 'tool box'],
    });
    return handleAnswer(answers.question_53 === 'tool bar');
}
async function question54() {
    const answers = await inquirer.prompt({
        name: 'question_54',
        type: 'list',
        message: '_________ tool use to reduce or cut the image area.\n',
        choices: ['rotate tool', 'text tool', 'pointer tool', 'crop tool'],
    });
    return handleAnswer(answers.question_54 === 'crop tool');
}
async function question55() {
    const answers = await inquirer.prompt({
        name: 'question_55',
        type: 'list',
        message: 'The tool used to move the entire page on the screen is called __________.\n',
        choices: ['hand tool', 'text tool', 'box tool', 'crop tool'],
    });
    return handleAnswer(answers.question_55 === 'hand tool');
}
async function question56() {
    const answers = await inquirer.prompt({
        name: 'question_56',
        type: 'list',
        message: '___________ tool is used to change the magnification of the page view.\n',
        choices: ['hand tool', 'text tool', 'zoom tool', 'crop tool'],
    });
    return handleAnswer(answers.question_56 === 'zoom tool');
}
async function question57() {
    const answers = await inquirer.prompt({
        name: 'question_57',
        type: 'list',
        message: 'the style is draw a verticle line through the middle of each word is called___________.\n',
        choices: ['reverse', 'strike thru', 'itallic', 'normal'],
    });
    return handleAnswer(answers.question_57 === 'strike thru');
}
async function question58() {
    const answers = await inquirer.prompt({
        name: 'question_58',
        type: 'list',
        message: 'which is not the alignment option in page maker?\n',
        choices: ['align left', 'justified', 'center', 'bottom'],
    });
    return handleAnswer(answers.question_58 === 'bottom');
}
async function question59() {
    const answers = await inquirer.prompt({
        name: 'question_59',
        type: 'list',
        message: 'remove pages option is used in ___________ menu.\n',
        choices: ['layout menu', 'edit menu', 'tool bar', 'type menu'],
    });
    return handleAnswer(answers.question_59 === 'layout menu');
}
async function question60() {
    const answers = await inquirer.prompt({
        name: 'question_60',
        type: 'list',
        message: '________ means changing font size.\n',
        choices: ['leading', 'tracking', 'scaling', 'editing'],
    });
    return handleAnswer(answers.question_60 === 'scaling');
}
async function question61() {
    const answers = await inquirer.prompt({
        name: 'question_61',
        type: 'list',
        message: '___________ is the table containing rows and columns.\n',
        choices: ['worksheet', 'cell', 'workbook', 'range'],
    });
    return handleAnswer(answers.question_61 === 'worksheet');
}
async function question62() {
    const answers = await inquirer.prompt({
        name: 'question_62',
        type: 'list',
        message: 'Alt + F1 : creates the chart from the selected data in Excel\n',
        choices: ['true', 'false'],
    });
    return handleAnswer(answers.question_62 === 'true');
}
async function question63() {
    const answers = await inquirer.prompt({
        name: 'question_63',
        type: 'list',
        message: 'Alt + Enter: inserts a new cell within a line in Excel.\n',
        choices: ['true', 'false'],
    });
    return handleAnswer(answers.question_63 === 'false');
}
async function question64() {
    const answers = await inquirer.prompt({
        name: 'question_64',
        type: 'list',
        message: 'ctrl + shift + J: aligns the text in the center in word. \n',
        choices: ['true', 'false'],
    });
    return handleAnswer(answers.question_64 === 'false');
}
async function question65() {
    const answers = await inquirer.prompt({
        name: 'question_65',
        type: 'list',
        message: 'ctrl + shift + N : applies normal style formatting to the selected text in word.\n',
        choices: ['true', 'false'],
    });
    return handleAnswer(answers.question_65 === 'true');
}
async function question66() {
    const answers = await inquirer.prompt({
        name: 'question_66',
        type: 'list',
        message: 'Alt + = : inserts the formula for the sum of selected.\n',
        choices: ['true', 'false'],
    });
    return handleAnswer(answers.question_66 === 'true');
}
async function question67() {
    const answers = await inquirer.prompt({
        name: 'question_67',
        type: 'list',
        message: 'Alt + S: saves the Excel worksheet.\n',
        choices: ['true', 'false'],
    });
    return handleAnswer(answers.question_67 === 'false');
}
async function question68() {
    const answers = await inquirer.prompt({
        name: 'question_68',
        type: 'list',
        message: 'ctrl + F9: minimize the current window in word or Excel.\n',
        choices: ['true', 'false'],
    });
    return handleAnswer(answers.question_68 === 'true');
}
async function question69() {
    const answers = await inquirer.prompt({
        name: 'question_69',
        type: 'list',
        message: 'ctrl + Y : repeats the last action performed.\n',
        choices: ['true', 'false'],
    });
    return handleAnswer(answers.question_69 === 'true');
}
async function question70() {
    const answers = await inquirer.prompt({
        name: 'question_70',
        type: 'list',
        message: 'ctrl + F: displays the object box.\n',
        choices: ['true', 'false'],
    });
    return handleAnswer(answers.question_70 === 'false');
}
async function question71() {
    const answers = await inquirer.prompt({
        name: 'question_71',
        type: 'list',
        message: 'Alt + ctrl + O: displayes the home tab in word, Excel and powerpoint.\n',
        choices: ['true', 'false'],
    });
    return handleAnswer(answers.question_71 === 'true');
}
async function question72() {
    const answers = await inquirer.prompt({
        name: 'question_72',
        type: 'list',
        message: 'Alt + F4: closes the current window or program in windows\n',
        choices: ['true', 'false'],
    });
    return handleAnswer(answers.question_72 === 'true');
}
async function question73() {
    const answers = await inquirer.prompt({
        name: 'question_73',
        type: 'list',
        message: 'ctrl + shift + D: single underlines the selected text in word.\n',
        choices: ['true', 'false'],
    });
    return handleAnswer(answers.question_73 === 'false');
}
async function question74() {
    const answers = await inquirer.prompt({
        name: 'question_74',
        type: 'list',
        message: 'ctrl + F10: maximizes or restores the current window in word or Excel.\n',
        choices: ['true', 'false'],
    });
    return handleAnswer(answers.question_74 === 'true');
}
async function question75() {
    const answers = await inquirer.prompt({
        name: 'question_75',
        type: 'list',
        message: 'ctrl + C: cut the select text in word.\n',
        choices: ['true', 'false'],
    });
    return handleAnswer(answers.question_75 === 'false');
}
// Run it with top-level await
console.clear();
await welcome();
await askName();
await question1();
await question2();
await question3();
await question4();
await question5();
await question6();
await question7();
await question8();
await question9();
await question10();
await question11();
await question12();
await question13();
await question14();
await question15();
await question16();
await question17();
await question18();
await question19();
await question20();
await question21();
await question22();
await question23();
await question24();
await question25();
await question26();
await question27();
await question28();
await question29();
await question30();
await question31();
await question32();
await question33();
await question34();
await question35();
await question36();
await question37();
await question38();
await question39();
await question40();
await question41();
await question42();
await question43();
await question44();
await question45();
await question46();
await question47();
await question48();
await question49();
await question50();
await question51();
await question52();
await question53();
await question54();
await question55();
await question56();
await question57();
await question58();
await question59();
await question60();
await question61();
await question62();
await question63();
await question64();
await question65();
await question66();
await question67();
await question68();
await question69();
await question70();
await question71();
await question72();
await question73();
await question74();
await question75();
winner();
