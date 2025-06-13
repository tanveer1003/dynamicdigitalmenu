const API_BASE_URL = "https://dynamicdigitalmenu2.touchtoshop.com/dynamicdigitalmenu-api2/"; //process.env.REACT_APP_API_BASE_URL;


  export const fetchCategories = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}api/categories`);
            const data = await response.json();
            return data;
            //setCategories(data);
            //setFilteredCategories(data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    export const deleteCategory = async (id) => {
            try {
                await fetch(`${API_BASE_URL}api/categories/${id}`, { method: 'DELETE' });
                //fetchCategories(); // Refresh the list
            } catch (error) {
                alert('Error deleting');
            }
        };

  export const fetchProducts = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}api/products`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

  export const fetchSubCategories = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}api/categories/sub-categories/`);
            const data = await response.json();
            return data; //setSubCategories(data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };
