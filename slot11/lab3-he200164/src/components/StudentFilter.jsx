export default function StudentFilter({searchTerm, setSearchTerm, filterMajor, setFilterMajor, majorList}) {
    return (
        <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
            <input
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            
            <select 
                value={filterMajor} 
                onChange={(e) => setFilterMajor(e.target.value)}
            >
                <option value="All Majors">All Majors</option>
                {majorList.map((major, index) => (<option key={index} value={major}>{major}</option>))}
            </select>
        </div>
    )
}