/**
 * Created by Aditi Jain on 12/19/18.
 */

/**
 * Service sends AJAX request to server to get surgeons data.
 * @constructor
 */
function Service()
{
    /**
     * This function sends AJAX request to server,
     * format the response as required and
     * call the successCallBack function with formatted response
     * as arguments to the function.
     *
     * @param successCallBack   Function called when response in received successfully
     * @param errorCallBack     Function called when error occurred.
     */
    this.getSurgeons=function(successCallBack,errorCallBack)
    {
        $.ajax({
                url:"getSurgeons",
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
