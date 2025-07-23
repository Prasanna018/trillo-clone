
export interface Board {
    id: string,
    title: string,
    description: string | null,
    color: string,
    user_id: string,
    created_at: string
    updated_at: string


}

export interface Column {
    id: string,
    board_id: string,
    title: string,
    sort_order: number,
    created_at: string
}

export interface Tasks {
    id: string,
    column_id: string,
    title: string,
    description: string | null,
    assigne: string | null,
    due_date: string,
    priority: "low" | "medium" | "High",
    sort_order: number,
    created_at: string,
    updated_at: string
}

