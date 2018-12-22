/**
 * Created by Aditi Jain on 12/19/18.
 */

/**
 * SurgeonModel
 * @constructor
 * This class stores information required in Web Page.
 */
function SurgeonModel()
{
    /**
     * Stores all the surgeons
     * @type {Array}
     */
    this.surgeons=[];

    /**
     * Stores the Search results, and this is displayed in table
     * @type {Array}
     */
    this.filteredSurgeons=[];

    /**
     * Specialties to populate datalist in search form.
     * @type {Array}
     */
    this.specialties=[];
}
