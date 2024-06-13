
let xmlHttp = new XMLHttpRequest();
let senators;
let senators_Filter;

xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
        let metaAndObjects = JSON.parse(xmlHttp.responseText);
        senators = metaAndObjects.objects;
        Task1()
        Task2_3()
        Task4()
    }
}
xmlHttp.open("GET", "senators.json", 1);
xmlHttp.send();


function Task1() { 

    let dl = [];
    let rl = [];
    let il = []
    let dc = 0;
    let rc = 0;
    let ic = 0;
    let j = 0;
    

    while (j < senators.length )  
    {
        if (senators[j].party === "Democrat") {
            dc = dc + 1;
            if (senators[j].leadership_title != null)
                dl.push(senators[j]);
        }else if (senators[j].party === "Independent") {
            ic ++;
            if (senators[j].leadership_title != null)
            il.push(senators[j]);    
        }else {
            rc = rc + 1;
            if (senators[j].leadership_title != null)
                rl.push(senators[j]);
        }
        j++;
    }

    let TableLead =  "<table>" + "<th>Name</th>" + "<th>Party</th>" + "<th>Leadership Position</th>" ;
    
    
 


    let k = 0;

    while(k < rl.concat(dl).length){ 
    TableLead =  TableLead + "<tr>" + "<td>" + rl.concat(dl)[k].person.firstname + ' '
    + rl.concat(dl)[k].person.lastname + "</td>" + "<td>"+ " " + rl.concat(dl)[k].party + "</td>"+ "<td>" + rl.concat(dl)[k].leadership_title + "</td>"+ "</tr>";
    ++k;

    }
 
    document.getElementById("leaders").innerHTML = TableLead + "</table>";
    document.getElementById("dc").innerHTML = "Democrats: " + dc;
    document.getElementById("rc").innerHTML = "Republicans: " + rc
    document.getElementById("ic").innerHTML = "Independants: " + ic;
    
    

}

function TableMaker(table){

    let TableLead =  "<table>" + "<th>Name</th>" + "<th>Gender</th>" + "<th>Party</th>" +"<th>Rank</th>"   ;
    let k = 0;
    while (k < table.length) 
    {
        TableLead =  TableLead + "<tr>" + "<td>" + table[k].person.firstname + ' '
         + table[k].person.lastname + "</td>" + "<td>"+ " " + table[k].person.gender + "</td>"+ "<td>" + table[k].party + "</td>"+ "<td>" + table[k].senator_rank + "</td>"+ 
         "<td>" +  " </td>" +  "</tr>";
         k = k + 1;
    }

    TableLead = TableLead + "</table>" ; 


    return TableLead

}

function Task2_3(){

    let listDemocrats = []
    let listRepublicans = [];


    let j = 0;

    while (j < senators.length)
    
    {

 if (
        (document.getElementById("party").value === 'show all' || document.getElementById("party").value === senators[j].party) &&
         (document.getElementById("state").value === 'show all' || document.getElementById("state").value === senators[j].state) && 
         (document.getElementById("rank").value === 'show all' || document.getElementById("rank").value === senators[j].senator_rank)
            )
             {
            if (senators[j].party === 'Republican')
             {
                listRepublicans.push(senators[j]);
            }else {
                listDemocrats.push(senators[j]);
            }
        }
        
        j++

    }

    document.getElementById("senatorInformation").innerHTML =TableMaker(listDemocrats.concat(listRepublicans));

    senators_Filter = listDemocrats.concat(listRepublicans);

    let dropdown = ''; 
    let k = 0;

    while ( k < listDemocrats.concat(listRepublicans).length) 
    {
        dropdown = dropdown + '<option value=' + k + '>' + 
        listDemocrats.concat(listRepublicans)[k].person.firstname+"-"+
        listDemocrats.concat(listRepublicans)[k].person.lastname + '</option>';
        k++
    }
    document.getElementById("DetailedSenatorInformation").innerHTML = dropdown;

    
    
}


function Task4() 
{
   
    let dob = senators_Filter[document.getElementById("DetailedSenatorInformation").value].person.birthday;
    let o_a = senators_Filter[document.getElementById("DetailedSenatorInformation").value].extra.office;
    let sid =  senators_Filter[document.getElementById("DetailedSenatorInformation").value].startdate
    let twitter = senators_Filter[document.getElementById("DetailedSenatorInformation").value].person.twitterid;
    let yt = senators_Filter[document.getElementById("DetailedSenatorInformation").value].person.youtubeid;
    let web = senators_Filter[document.getElementById("DetailedSenatorInformation").value].website;

    let list_moreInformation = "<ul>" + "<li>DOB :  " +  dob + "</li>" + "<li>Office Address : " + o_a + "</li>" 
    + "<li>Start date : " + sid  + "</li>" + '<li><a href="' 
    + web + '" target="_blank">Website<\a></li>' ;

    if (twitter != null)
    {
        list_moreInformation = list_moreInformation + "<li> Twitter :  " + twitter+ "</li>";

    }
    if (yt != null)
    {
        list_moreInformation = list_moreInformation + "<li> Youtube :  " + yt + "</li>";

    } 
    document.getElementById("more_info").innerHTML = list_moreInformation;
}
