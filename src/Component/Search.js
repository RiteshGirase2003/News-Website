import React ,{useState,useEffect} from 'react';
import style from './Search.module.css';
function Search({ onSearchSelection }) {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const categories = ["business", "entertainment", "general", "health", "science", "sports", "technology"];

    const languages = [
        { code: 'ar', fullForm: 'Arabic' },
        { code: 'de', fullForm: 'German' },
        { code: 'en', fullForm: 'English' },
        { code: 'es', fullForm: 'Spanish' },
        { code: 'fr', fullForm: 'French' },
        { code: 'he', fullForm: 'Hebrew' },
        { code: 'it', fullForm: 'Italian' },
        { code: 'nl', fullForm: 'Dutch' },
        { code: 'no', fullForm: 'Norwegian' },
        { code: 'pt', fullForm: 'Portuguese' },
        { code: 'ru', fullForm: 'Russian' },
        { code: 'sv', fullForm: 'Swedish' },
        { code: 'ud', fullForm: 'Undefined' }, 
        { code: 'zh', fullForm: 'Chinese' }
      ];
      

    const countries = [
        { code: 'ae', name: 'United Arab Emirates' },
        { code: 'ar', name: 'Argentina' },
        { code: 'at', name: 'Austria' },
        { code: 'au', name: 'Australia' },
        { code: 'be', name: 'Belgium' },
        { code: 'bg', name: 'Bulgaria' },
        { code: 'br', name: 'Brazil' },
        { code: 'ca', name: 'Canada' },
        { code: 'ch', name: 'Switzerland' },
        { code: 'cn', name: 'China' },
        { code: 'co', name: 'Colombia' },
        { code: 'cu', name: 'Cuba' },
        { code: 'cz', name: 'Czech Republic' },
        { code: 'de', name: 'Germany' },
        { code: 'eg', name: 'Egypt' },
        { code: 'fr', name: 'France' },
        { code: 'gb', name: 'United Kingdom' },
        { code: 'gr', name: 'Greece' },
        { code: 'hk', name: 'Hong Kong' },
        { code: 'hu', name: 'Hungary' },
        { code: 'id', name: 'Indonesia' },
        { code: 'ie', name: 'Ireland' },
        { code: 'il', name: 'Israel' },
        { code: 'in', name: 'India' },
        { code: 'it', name: 'Italy' },
        { code: 'jp', name: 'Japan' },
        { code: 'kr', name: 'South Korea' },
        { code: 'lt', name: 'Lithuania' },
        { code: 'lv', name: 'Latvia' },
        { code: 'ma', name: 'Morocco' },
        { code: 'mx', name: 'Mexico' },
        { code: 'my', name: 'Malaysia' },
        { code: 'ng', name: 'Nigeria' },
        { code: 'nl', name: 'Netherlands' },
        { code: 'no', name: 'Norway' },
        { code: 'nz', name: 'New Zealand' },
        { code: 'ph', name: 'Philippines' },
        { code: 'pl', name: 'Poland' },
        { code: 'pt', name: 'Portugal' },
        { code: 'ro', name: 'Romania' },
        { code: 'rs', name: 'Serbia' },
        { code: 'ru', name: 'Russia' },
        { code: 'sa', name: 'Saudi Arabia' },
        { code: 'se', name: 'Sweden' },
        { code: 'sg', name: 'Singapore' },
        { code: 'si', name: 'Slovenia' },
        { code: 'sk', name: 'Slovakia' },
        { code: 'th', name: 'Thailand' },
        { code: 'tr', name: 'Turkey' },
        { code: 'tw', name: 'Taiwan' },
        { code: 'ua', name: 'Ukraine' },
        { code: 'us', name: 'United States' },
        { code: 've', name: 'Venezuela' },
        { code: 'za', name: 'South Africa' }
      ];
      
      
  const handleSelection = (searchType, selectedOption) => {
    const index = selectedOptions.findIndex(option => option.search === searchType);

    if (index !== -1) {
      const updatedOptions = [...selectedOptions];
      updatedOptions[index].option = selectedOption;
      setSelectedOptions(updatedOptions);
    } else {
      setSelectedOptions([...selectedOptions, { search: searchType, option: selectedOption }]);
    }

    onSearchSelection(selectedOptions);
  };
     
  return (
    <div>
      <div className={style.row}>
        {/* Category Dropdown */}
        <div className={style.category}>
          <label htmlFor="category"><h1>Category</h1></label>
          <select id="category" onChange={(e) => handleSelection('category', e.target.value)}>
            <option value="">None</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Language Dropdown */}

        <div className={style.language}>
          <label htmlFor="language"><h1>Language</h1></label>
            <select id="language" onChange={(e) => handleSelection('language', e.target.value)}>
              <option value="">None</option>
              {languages.map((lang, index) => (
                <option key={index} value={lang.code}>
                  {lang.fullForm}
                </option>
              ))}
            </select>
        </div>

        {/* Country Dropdown */}
        <div className={style.country}>
          <label htmlFor="country"><h1>Country</h1></label>
          <select id="country" onChange={(e) => handleSelection('country', e.target.value)}>
            <option value="">None</option>
            {countries.map((country, index) => (
              <option key={index} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        
      </div>
    </div>
  )
}

export default Search