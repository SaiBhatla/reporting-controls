import Axios from 'axios';

function getServiceUrl(action) {
    return "http://localhost:1234/LayoutService/" + action;
}

function getSaveServiceUrl(entityTypeId,workflowId,workflowDesc,workflowStartDate) {
    return "http://localhost:1234/LayoutService/SaveFormData/" + entityTypeId +"/"+workflowId+"/"+workflowDesc+"/"+workflowStartDate;
}

export async function getEntityTypes(){
    const res = await Axios.post(getServiceUrl("GetEntityTypes"));
    return res.data.GetEntityTypesResult.EntityTypes;
}

function getFormSettingsRequest(entityTypeId,workflowId,workflowDesc,workflowStartDate) {
    return {
        "request":{
            "EntityTypeId":entityTypeId,
            "Workflow":{
                "Id":workflowId,
                "Description":workflowDesc
            },
            "WorkflowStartDate":workflowStartDate
        }
    }
}

export async function getFormSettings(){
    const res = await Axios.post(getServiceUrl("GetFormData"));
    return res.data.GetFormDataResult;
}
export async function saveFormSettings(entityTypeId,workflowId,workflowDesc,workflowStartDate){
    let request = getFormSettingsRequest(entityTypeId,workflowId,workflowDesc,workflowStartDate);
    console.log(JSON.stringify(request));
    const res = await Axios.get(getSaveServiceUrl(entityTypeId,workflowId,workflowDesc,workflowStartDate));
    if(res.data.SaveFormDataResult === true){
        console.log("Save success!");
    }
    else{
        console.log("Save failed");
    }
}