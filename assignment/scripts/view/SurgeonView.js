/**
 * Created by Aditi Jain on 12/19/18.
 */

function SurgeonView()
{
    var surgeonModel=new SurgeonModel();
    var service =new Service();
    function getSurgeons(callBack)
    {
        service.getSurgeons(function(data)
        {
            callBack(data)
        },function(error)
        {
            alert("error");
        });
    }

    function populateModel()
    {
        getSurgeons(function(surgeons)
        {
            surgeonModel.surgeons=surgeons;
            surgeonModel.filteredSurgeons=surgeons;
            surgeonModel.specialties=[];
            var specialties=[];
            for(var i =0;i<surgeons.length;i++){
                specialties.push(surgeons[i].specialty);
            }
            surgeonModel.specialties=specialties.filter(function(value,index,specialties)
            {
                return specialties.indexOf(value) === index;
            });
            alert(surgeonModel.specialties);
            updateSpecialtyList();
            updateSurgeonTable();

        });
    }

    function updateSpecialtyList()
    {
        var specialtyDatalist=document.getElementById('specialty');
        surgeonModel.specialties.forEach(function(specialty){
            var option = document.createElement('option');
            option.value = specialty;
            specialtyDatalist.appendChild(option);
        });

        var specialtiesTab=document.getElementsByClassName('specialty-tab');
        var widthOfSpecialty=100/surgeonModel.specialties.length;
        for(var i =0;i<surgeonModel.specialties.length;i++){
            var specialtyDiv=document.createElement('div');
            specialtyDiv.style="width:"+widthOfSpecialty+"%;";
            specialtyDiv.appendChild(document.createTextNode(surgeonModel.specialties[i]));
            specialtiesTab[0].appendChild(specialtyDiv);
        }
    }
    function updateSurgeonTable()
    {
        //update table
        var table_body=document.getElementById('surgeonsTableBody');
        while (table_body.firstChild) {
            table_body.removeChild(table_body.firstChild);
        }
        for(var i =0;i<surgeonModel.filteredSurgeons.length;i++){
            var row=document.createElement('tr');

            var firstNameColumnData=document.createTextNode(surgeonModel.filteredSurgeons[i].firstName);
            var lastNameColumnData=document.createTextNode(surgeonModel.filteredSurgeons[i].lastName);
            var cityColumnData=document.createTextNode(surgeonModel.filteredSurgeons[i].city);
            var stateColumnData=document.createTextNode(surgeonModel.filteredSurgeons[i].state);
            var specialtyColumnData=document.createTextNode(surgeonModel.filteredSurgeons[i].specialty);
            var contactColumnData=document.createTextNode("Contact Surgeon");

            var contactAnchorTag = document.createElement('a');
            contactAnchorTag.setAttribute('href',"mailto:"+surgeonModel.filteredSurgeons[i].contact);
            contactAnchorTag.appendChild(contactColumnData);

            var td=[];
            for(var j in surgeonModel.filteredSurgeons[i]){
                td.push(document.createElement('td'));
            }

            td[0].appendChild(firstNameColumnData);
            td[1].appendChild(lastNameColumnData);
            td[2].appendChild(cityColumnData);
            td[3].appendChild(stateColumnData);
            td[4].appendChild(specialtyColumnData);
            td[5].appendChild(contactAnchorTag);

            for(var j in td){
                row.appendChild(td[j]);
            }
            table_body.appendChild(row);
        }
    }
    $("#filterButton").on("click", function() {
        var location = $("#location").val().toLowerCase();
        var specialty=$("input[name=specialty]").val();
        var new_surgeons=[];
        for(var s in surgeonModel.surgeons)
        {
            var surgeon=surgeonModel.surgeons[s];
            if((location=="" ||
                surgeon.city.toLowerCase()==location ||
                surgeon.state.toLowerCase()==location)
                && (specialty==""|| surgeon.specialty==specialty))
            {
                new_surgeons.push(surgeon)
            }
        }
        surgeonModel.filteredSurgeons=new_surgeons;
        updateSurgeonTable();
    });
    populateModel();
}

