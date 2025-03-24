const createURL = (path) => {
    return window.location.origin + path
}

export const updateEntry = async (id, content) => {
    const res = await fetch(new Request(createURL(`/api/notes/${id}`), {
        method: 'PATCH',
        body: JSON.stringify({ content }),
    }))
    if (res.ok) {
        const data = await res.json()
        return data.data
    }

}

export const createNewEntry = async () => {
    const res = await fetch(
        new Request(createURL('/api/notes'), {
            method: 'POST',
        })
    )
    if (res.ok) {
        const data = await res.json()
        return data.data
    }

}

export const askQuestion = async question => {
    const res = await fetch(
        new Request(createURL('/api/notes/question'), {
            method: 'POST',
            body: JSON.stringify({ question }),
        })
    )
    if (res.ok) {
        const data = await res.json()
        return data.data
    }

}
