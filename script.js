import { battery, camera } from './battery.js';

// // get element part
// const selectBrand = document.getElementById('select-brand');
// const selectModel = document.getElementById('select-model');
// const inputPower = document.getElementById('input-power');
// const resultTable = document.getElementById('result-table');

// // func part-------------------------------------------------------------------
// const getCameraBrandArray = () => {
//     let cameraBrandSet = new Set();
//     for(let i = 0; i < camera.length; i++){
//         cameraBrandSet.add(camera[i].brand);
//     };
//     return [...cameraBrandSet];
// };

// const getSelectBrandModelArray = (selectedBrand) => {
//     let cameraModelSet = new Set();
//     for(let i = 0; i < camera.length; i++){
//         if(camera[i].brand === selectedBrand)cameraModelSet.add(camera[i].model);
//     };
//     return [...cameraModelSet];
// };

// const createSelectBrand = () => {
//     const cameraBrandArray = getCameraBrandArray();
//     for(let i = 0; i < cameraBrandArray.length; i++){
//         const selectionBrand = document.createElement('option');
//         selectionBrand.innerHTML = cameraBrandArray[i];
//         selectBrand.append(selectionBrand);
//     };
// };

// const createSelectModel = (modelArray) => {
//     selectModel.innerHTML = '';
//     for(let i = 0; i < modelArray.length; i++){
//         const selectionModel = document.createElement('option');
//         selectionModel.innerHTML = modelArray[i];
//         selectModel.append(selectionModel);
//     };
// };

// // 必要な消費電力を還す
// const getRequiredPower = () => {
//     const selectBrandIndex = selectBrand.selectedIndex;
//     const selectModelIndex = selectModel.selectedIndex;
//     const selectBrandValue = selectBrand.options[selectBrandIndex].text;
//     const selectModelValue = selectModel.options[selectModelIndex].text;
//     let cameraOfRequiredPower;
//     for(let i = 0; i < camera.length; i++){
//         if(camera[i].brand === selectBrandValue && camera[i].model === selectModelValue){
//             cameraOfRequiredPower = camera[i].powerConsumptionWh;
//         };
//     };
//     const totalRequiredPower = cameraOfRequiredPower + parseInt(inputPower.value);
//     return totalRequiredPower;
// };

// // 必要な消費電力を満たす電池の配列を返す
// const getChooseBatteryArray = (requiredPower) => {
//     let chooseBatteryArray = [];
//     for(let i = 0; i < battery.length; i++){
//         if(battery[i].endVoltage * battery[i].maxDraw >= requiredPower){
//             chooseBatteryArray.push(battery[i]);
//         };
//     };
//     console.log(chooseBatteryArray);
//     chooseBatteryArray = chooseBatteryArray.sort((first, second) => {
//         if(first.batteryName > second.batteryName){
//             return 1;
//         }else{
//             return -1;
//         };
//     });
//     console.log(chooseBatteryArray);
//     return chooseBatteryArray;
// };

// // 条件を満たす電池をテーブルとして表示する
// const createChooseBattery = (requiredPower, batteryArray) => {
//     resultTable.innerHTML = '';
//     for(let i = 0; i < batteryArray.length; i++){
//         const batteryName = batteryArray[i].batteryName;
//         const capacityAh = batteryArray[i].capacityAh;
//         const voltage = batteryArray[i].voltage;
//         const keepTime = Math.round((capacityAh * voltage) / requiredPower * 10) / 10;
//         const tr = document.createElement('tr');
//         const tdName = document.createElement('td');
//         const tdKeepTime = document.createElement('td');
//         tdName.innerHTML = `${batteryName}`;
//         tdKeepTime.innerHTML = `${keepTime}`;
//         tr.append(tdName);
//         tr.append(tdKeepTime);
//         resultTable.append(tr);
//     };
// };

// // event part ---------------------------------------------------------------
// selectBrand.addEventListener('change', (event) => {
//     const selectedModelArray = getSelectBrandModelArray(event.currentTarget.value);
//     createSelectModel(selectedModelArray);
//     const requiredPower = getRequiredPower();
//     const chooseBatteryArray = getChooseBatteryArray(requiredPower);
//     createChooseBattery(requiredPower, chooseBatteryArray);
// });

// selectModel.addEventListener('change', () => {
//     const requiredPower = getRequiredPower();
//     const chooseBatteryArray = getChooseBatteryArray(requiredPower);
//     createChooseBattery(requiredPower, chooseBatteryArray);
// });

// inputPower.addEventListener('change', () => {
//     const requiredPower = getRequiredPower();
//     const chooseBatteryArray = getChooseBatteryArray(requiredPower);
//     createChooseBattery(requiredPower, chooseBatteryArray);
// })

// // call part------------------------------------------------------------------
// const cameraBrandArray = getCameraBrandArray();
// createSelectBrand();
// const defaultModelArray = getSelectBrandModelArray(cameraBrandArray[0]);
// createSelectModel(defaultModelArray);
// const requiredPower = getRequiredPower();
// const chooseBatteryArray = getChooseBatteryArray(requiredPower);
// createChooseBattery(requiredPower, chooseBatteryArray);

// get element part
const selectBrand = document.getElementById('select-brand');
const selectModel = document.getElementById('select-model');
const inputPower = document.getElementById('input-power');
const resultTable = document.getElementById('result-table');

// func part-------------------------------------------------------------------
const getCameraBrandArray = () => {
    let cameraBrandSet = new Set();
    for(let i = 0; i < camera.length; i++){
        cameraBrandSet.add(camera[i].brand);
    };
    return [...cameraBrandSet];
};

const getSelectBrandModelArray = (selectedBrand) => {
    let cameraModelSet = new Set();
    for(let i = 0; i < camera.length; i++){
        if(camera[i].brand === selectedBrand)cameraModelSet.add(camera[i].model);
    };
    return [...cameraModelSet];
};

const createChoices = (parentNode, choicesArray) => {
    parentNode.innerHTML = '';
    for(let i = 0; i < choicesArray.length; i++){
        const choice = document.createElement('option');
        choice.innerHTML = choicesArray[i];
        parentNode.append(choice);
    };
};

// const createSelectBrand = () => {
//     const cameraBrandArray = getCameraBrandArray();
//     for(let i = 0; i < cameraBrandArray.length; i++){
//         const selectionBrand = document.createElement('option');
//         selectionBrand.innerHTML = cameraBrandArray[i];
//         selectBrand.append(selectionBrand);
//     };
// };

// const createSelectModel = (modelArray) => {
//     selectModel.innerHTML = '';
//     for(let i = 0; i < modelArray.length; i++){
//         const selectionModel = document.createElement('option');
//         selectionModel.innerHTML = modelArray[i];
//         selectModel.append(selectionModel);
//     };
// };

// 必要な消費電力を還す
const getRequiredPower = () => {
    const selectBrandIndex = selectBrand.selectedIndex;
    const selectModelIndex = selectModel.selectedIndex;
    const selectBrandValue = selectBrand.options[selectBrandIndex].text;
    const selectModelValue = selectModel.options[selectModelIndex].text;
    let cameraOfRequiredPower;
    for(let i = 0; i < camera.length; i++){
        if(camera[i].brand === selectBrandValue && camera[i].model === selectModelValue){
            cameraOfRequiredPower = camera[i].powerConsumptionWh;
        };
    };
    const totalRequiredPower = cameraOfRequiredPower + parseInt(inputPower.value);
    return totalRequiredPower;
};

// 必要な消費電力を満たす電池の配列を返す
const getChooseBatteryArray = (requiredPower) => {
    let chooseBatteryArray = [];
    for(let i = 0; i < battery.length; i++){
        if(battery[i].endVoltage * battery[i].maxDraw >= requiredPower){
            chooseBatteryArray.push(battery[i]);
        };
    };
    chooseBatteryArray = chooseBatteryArray.sort((first, second) => {
        if(first.batteryName > second.batteryName){
            return 1;
        }else{
            return -1;
        };
    });
    return chooseBatteryArray;
};

// 条件を満たす電池をテーブルとして表示する
const createChooseBattery = (resultNode, requiredPower, batteryArray) => {
    resultNode.innerHTML = '';
    for(let i = 0; i < batteryArray.length; i++){
        const batteryName = batteryArray[i].batteryName;
        const capacityAh = batteryArray[i].capacityAh;
        const voltage = batteryArray[i].voltage;
        const keepTime = Math.round((capacityAh * voltage) / requiredPower * 10) / 10;
        const tr = document.createElement('tr');
        const tdName = document.createElement('td');
        const tdKeepTime = document.createElement('td');
        tdName.innerHTML = `${batteryName}`;
        tdKeepTime.innerHTML = `${keepTime}`;
        tr.append(tdName);
        tr.append(tdKeepTime);
        resultNode.append(tr);
    };
};

// event part ---------------------------------------------------------------
selectBrand.addEventListener('change', (event) => {
    const selectedModelArray = getSelectBrandModelArray(event.currentTarget.value);
    createChoices(selectModel, selectedModelArray);
    const requiredPower = getRequiredPower();
    const chooseBatteryArray = getChooseBatteryArray(requiredPower);
    createChooseBattery(resultTable ,requiredPower, chooseBatteryArray);
});

selectModel.addEventListener('change', () => {
    const requiredPower = getRequiredPower();
    const chooseBatteryArray = getChooseBatteryArray(requiredPower);
    createChooseBattery(resultTable ,requiredPower, chooseBatteryArray);
});

inputPower.addEventListener('change', () => {
    const requiredPower = getRequiredPower();
    const chooseBatteryArray = getChooseBatteryArray(requiredPower);
    createChooseBattery(resultTable ,requiredPower, chooseBatteryArray);
})

// call part------------------------------------------------------------------
const cameraBrandArray = getCameraBrandArray();
createChoices(selectBrand, cameraBrandArray);
const defaultModelArray = getSelectBrandModelArray(cameraBrandArray[0]);
createChoices(selectModel, defaultModelArray);
const requiredPower = getRequiredPower();
const chooseBatteryArray = getChooseBatteryArray(requiredPower);
createChooseBattery(resultTable, requiredPower, chooseBatteryArray);
