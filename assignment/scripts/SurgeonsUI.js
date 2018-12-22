/**
 * Created by Aditi Jain on 12/19/18.
 */


var surgeonView=null;
/**
 * Handles ready event on document
 */
function setupView()
{
    surgeonView=new SurgeonView();
}

$(document).ready(setupView);
