import { getRandomUser } from "../../Utility/Api";

const GetRandomContact = async (props) => {
    try {
        // إرسال الطلب إلى API
        const responseFromAPI = await getRandomUser();
        console.log(responseFromAPI);

        // استدعاء الدالة لإضافة جهة اتصال عشوائية
        return props.handleAddRandomContact({
            name: responseFromAPI.data.first_name + " " + responseFromAPI.data.last_name,
            email: responseFromAPI.data.email,
            phone: responseFromAPI.data.phone_number,
        });
    } catch (error) {
        // معالجة خطأ الطلب
        if (error.response && error.response.status === 429) {
            console.error("Rate limit exceeded. Please try again later.");
            alert("You have exceeded the API request limit. Please wait and try again later.");
        } else {
            console.error("An error occurred while fetching random user:", error);
            alert("Failed to fetch random user. Please try again.");
        }
    }
};

const AddRandomContact = (props) => {
    return (
        <div>
            <button
                className="btn btn-success form-control"
                onClick={() => GetRandomContact(props)}
            >
                Add Random Contact
            </button>
        </div>
    );
};

export default AddRandomContact;
