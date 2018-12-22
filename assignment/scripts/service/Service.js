/**
 * Created by Aditi Jain on 12/19/18.
 */

function Service()
{
    this.getSurgeons=function(successCallBack,errorCallBack)
    {
        $.ajax({
                url:"getData",
                type:"GET",
                success:function(data)
                {
                    var surgeons=[];
                    for(var i in data)
                    {
                        var s=data[i];
                        var surgeon=new Surgeon();
                        surgeon.firstName= s.name.split(" ")[0];
                        surgeon.lastName= s.name.split(" ")[1];
                        surgeon.city= s.city;
                        surgeon.state= s.state;
                        surgeon.specialty= s.specialty;
                        surgeon.contact= s.email;
                        surgeons.push(surgeon)
                    }
                    successCallBack(surgeons)
                },
                error:function(error)
                {
                    errorCallBack(error);
                }
            });
    }
}
