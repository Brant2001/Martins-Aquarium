const initializeDetailButtonEvents = () => {
    
    const allCloseButtons = document.querySelectorAll(".button--close")

    for (const btn of allCloseButtons) {
        btn.addEventListener("click", theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
        }
    }
        document.querySelector("#button--bart").addEventListener("click", theClickEvent => {
                const theDialog = document.querySelector("#details--bart")
                theDialog.showModal()
            }
            )
    
        document.querySelector("#button--betty").addEventListener("click", theClickEvent => {
                const theDialog = document.querySelector("#details--betty")
                theDialog.showModal()
            }
            )
    
        document.querySelector("#button--dory").addEventListener("click", theClickEvent => {
                const theDialog = document.querySelector("#details--dory")
                theDialog.showModal()
            }
            )
    
        document.querySelector("#button--nemo").addEventListener("click", theClickEvent => {
                const theDialog = document.querySelector("#details--nemo")
                theDialog.showModal()
            }
            )
    
        document.querySelector("#button--demon").addEventListener("click", theClickEvent => {
                const theDialog = document.querySelector("#details--demon")
                theDialog.showModal()
            }
            )
    
        document.querySelector("#button--bertha").addEventListener("click", theClickEvent => {
                const theDialog = document.querySelector("#details--bertha")
                theDialog.showModal()
            }
            )
    
        document.querySelector("#button--anchor").addEventListener("click", theClickEvent => {
                const theDialog = document.querySelector("#details--anchor")
                theDialog.showModal()
            }
            )
        
    export default initializeDetailButtonEvents