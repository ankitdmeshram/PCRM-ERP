const spinner = ({ display = false }) => {
    return (
        display &&
        <div className='spinner-page container-fluid'>
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default spinner