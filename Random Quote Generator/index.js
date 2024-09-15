const quotes = [
    "The only way to do great work is to love what you do.", //0
    "Life is what happens when you're busy making other plans." , //1
    "The future belongs to those who believe in the beauty of their dreams." , //2
    "It does not matter how slowly you go as long as you do not stop.", //3
    "In the end, it's not the years in your life that count. It's the life in your years.", //4
    "The purpose of our lives is to be happy.", //5
    "Get busy living or get busy dying.", //6
    "You only live once, but if you do it right, once is enough.", //7
    "Many of life's failures are people who did not realize how close they were to success when they gave up.", //8
    "If you want to live a happy life, tie it to a goal, not to people or things." //9
]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }

    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length) //Math.floor rounds it down [Math.random 0-0.999] e.g. 0.4 * 10 or 0.1349 * 10 or 0.9 * 10
        
        if (usedIndexes.has(randomIdx)) continue

        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break
    }
}