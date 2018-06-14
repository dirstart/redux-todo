/*
    actions：你的行动，空想改变不了什么。在你犹豫的时候，你的女朋友已经被追无数次了。

    To do or not to do ?
*/

// 稳定的变量名字，或者说，行动代号。  代号 - 奇迹。
export const MIRACLE = 'MIRACLE';
export const GROW = 'GROW';
export const PEOPLETAG = {
    student: 'student',
    adult: 'adult',
    child: 'child'
};

// 创造了什么奇迹
export const makeMiracle = (text) => {
    return {
        type: MIRACLE,
        text
    };
};

// 人类的成长行为
export const startGrow = (growType) => {
    return {
        type: GROW,
        growType
    };
};