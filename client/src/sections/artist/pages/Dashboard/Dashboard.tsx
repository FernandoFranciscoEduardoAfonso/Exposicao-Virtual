import { DataTable } from '@/sections/shared/components/DataTable'
import { columns, type Payment } from '../../components/PreviewExpositions/columns'
import { Eye, TrendingUp } from 'lucide-react'


function getData(): Payment[] {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "ff@example.com",
        },
        {
            id: "4353k",
            amount: 600,
            status: "success",
            email: "m@example.com",
        },
         {
            id: "4353k",
            amount: 600,
            status: "success",
            email: "m@example.com",
        }, {
            id: "4353k",
            amount: 600,
            status: "success",
            email: "m@example.com",
        }, {
            id: "4353k",
            amount: 600,
            status: "success",
            email: "m@example.com",
        },
        // ...
    ]
}
const Dashboard = () => {
    const data = getData()

    return (
        <div className="flex flex-1 flex-col gap-4">
            {/* <!-- Cards Top Section --> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                <CardQuickVision text="Total de obras" icon={<Eye/>}/>
                <CardQuickVision text="Obras activas" icon={<Eye/>}/>
                <CardQuickVision text="Exposições em andamento" icon={<Eye/>}/>
                <CardQuickVision text="Leilões activos" icon={<Eye/>}/>
            </div>

            {/* <!-- Main Charts Section --> */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* <!-- Performance Chart --> */}
                <div
                    className="card-border lg:col-span-2 bg-background p-6 rounded-xl shadow-sm flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h4 className="text-base font-bold text-foreground">Performance e Desempenho</h4>
                            <p className="text-sm text-muted-foreground">Performance insights for the last 30 days</p>
                        </div>
                        <div>
                            <span className="text-green-500 text-xs font-bold flex items-center gap-1">
                                <TrendingUp className="material-symbols-outlined text-[14px]" /> +30%
                            </span>
                        </div>
                    </div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-foreground">8.5 M</span>
                        <span className="text-muted-foreground text-sm flex items-center">
                            Total de Visualizações
                        </span>
                    </div>
                    {/* <!-- SVG Chart Simulation --> */}
                    <div className="flex-1 min-h-[250px] relative">
                        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 250">
                            <defs>
                                <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                                    <stop offset="0%" stop-color="#1313ec" stop-opacity="0.2"></stop>
                                    <stop offset="100%" stop-color="#1313ec" stop-opacity="0"></stop>
                                </linearGradient>
                            </defs>
                            <path
                                d="M0 200 C 50 180, 100 220, 150 180 C 200 140, 250 160, 300 120 C 350 80, 400 140, 450 110 C 500 80, 550 40, 600 60 C 650 80, 700 20, 750 40 L 800 30"
                                fill="none" stroke="#1313ec" stroke-linecap="round" stroke-width="4"></path>
                            <path
                                d="M0 200 C 50 180, 100 220, 150 180 C 200 140, 250 160, 300 120 C 350 80, 400 140, 450 110 C 500 80, 550 40, 600 60 C 650 80, 700 20, 750 40 L 800 30 L 800 250 L 0 250 Z"
                                fill="url(#chartGradient)"></path>
                            {/* <!-- Horizontal Grid Lines --> */}
                            <line className="dark:stroke-slate-800" stroke="#e2e8f0" stroke-dasharray="4" x1="0"
                                x2="800" y1="50" y2="50"></line>
                            <line className="dark:stroke-slate-800" stroke="#e2e8f0" stroke-dasharray="4" x1="0"
                                x2="800" y1="100" y2="100"></line>
                            <line className="dark:stroke-slate-800" stroke="#e2e8f0" stroke-dasharray="4" x1="0"
                                x2="800" y1="150" y2="150"></line>
                            <line className="dark:stroke-slate-800" stroke="#e2e8f0" stroke-dasharray="4" x1="0"
                                x2="800" y1="200" y2="200"></line>
                        </svg>
                        <div
                            className="flex justify-between mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2">
                            <span>Mon</span>
                            <span>Tue</span>
                            <span>Wed</span>
                            <span>Thu</span>
                            <span>Fri</span>
                            <span>Sat</span>
                            <span>Sun</span>
                        </div>
                    </div>
                </div>

                {/* <!-- Arts with more visitors --> */}
                <div className="flex flex-col gap-6">
                    <div
                        className="card-border bg-background p-6 rounded-xl border shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h4 className="text-sm font-bold text-foreground">Obras mais visitadas</h4>
                            <a className="text-[11px] font-bold text-(--secondary-base)" href="#">Ver todas</a>
                        </div>
                        <div className="space-y-4">
                            <div className="flex gap-3 items-start">
                                <div
                                    className="size-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                                    {/* <span className="material-symbols-outlined text-[16px]">gavel</span> */}
                                </div>
                                <div>
                                    <p className="text-xs text-foreground"><span
                                        className="font-bold">New bid</span> received for "Neon Dreams #2"</p>
                                    <p className="text-[13px] text-muted-foreground mt-0.5">2 mil visualizações</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-start">
                                <div
                                    className="size-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                                    {/* <span className="material-symbols-outlined text-[16px]">shopping_cart</span> */}
                                </div>
                                <div>
                                    <p className="text-xs text-foreground"><span
                                        className="font-bold">Piece sold!</span> "Organic Flow #1" purchased for
                                        $450</p>
                                    <p className="text-[13px] text-muted-foreground mt-0.5">1 mil visualizações</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-start">
                                <div
                                    className="size-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                                    {/* <span className="material-symbols-outlined text-[16px]">visibility</span> */}
                                </div>
                                <div>
                                    <p className="text-xs text-foreground"><span
                                        className="font-bold">Featured!</span> Your gallery is on the front page</p>
                                    <p className="text-[13px] text-muted-foreground mt-0.5">3 mil visualizações</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Quick Exhibitions Card --> */}
                    <div
                        className="bg-(--secondary-base) dark:bg-(--secondary-base) p-6 rounded-xl text-white shadow relative overflow-hidden group">
                        <div className="relative z-10">
                            <h4 className="text-sm font-bold mb-1">Live Exhibition</h4>
                            <p className="text-[11px] text-white/70 mb-4 uppercase tracking-wider font-medium">Virtual
                                Gallery #09</p>
                            <div className="flex -space-x-3 mb-6">
                                <div className="size-8 rounded-full border-2 border-(--secondary-base) bg-cover bg-center"
                                    data-alt="Art preview 1"
                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCZtppssrqZwwPkHZNlv-Ebt9gQWJjEHgfNs6DRjzme2m3Clm73ITiqH-gpQbCuQVUz209I0XmOZwsOGajY9_ctjRbJJsYr5lZUldfXZHu3kpmKCkSZc0gOUpVUGKgN4YdOwjvR8_w9AgFY7j_ZnhvkekjsC0hys7HoJg2VCpuyG9_wGJ8LTk6WqSm97nwPu87w7bhTgW2P-rmvMGkZih7npVWhcY6Q0cMeuHoe5x5lWP7zyqg7UqViciPtUW_J5uY69ElxgxEIoi2I')" }}>
                                </div>
                                <div className="size-8 rounded-full border-2 border-(--secondary-base) bg-cover bg-center"
                                    data-alt="Art preview 2"
                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBXeysjgXJc3sfLUBF1YDgLRNiRmIS-GVaYAka-KaQbwGB8rr87zh_jdeaDcxk51CQor6QFFUD5swkJyiYsKNdTUUkn6BWRMZj2DkZvL605_rGB394OzyEJkxrHMH25OHr5vVZGgQQfBjMWSMHMjcl8_uGs50MJhlD60L6MkYzbSndc1mJ16Myw5JEB6jKe9_HUTLV63-zlUa_u3hM3dfBqOYKKW1anPPLMkKqdK_9GFMvcEqq3Ptz5rMJHOkOhLDL6ssPxXs8A41JA')" }}>
                                </div>
                                <div className="size-8 rounded-full border-2 border-(--secondary-base) bg-cover bg-center"
                                    data-alt="Art preview 3"
                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBl_H6c567qon75w7wI82QOIYqMQDiebKs2I33Jc0FCGUMmxC3zpvcL8IwKeJDu6ofnqn7g3HTwpQlbgPk_79lQBzv_9wFaVQEH-S-t3AlRrj2nHWOV7YRv5iHXk_EQgr7y1Tj6CDJEMQ27Qfawr8q7WHiM3KyvJTcukdqBahLRZrZ1gM3lXBEejc5IwHZSevuydGBTeM1BYglfBWWaER_o8Ub7iPvZrxR5m4R4LUfeIHdJ6a1NAdDbFqPZRlTAmAwGuE75-mbmIRqA')" }}>
                                </div>
                                <div
                                    className="size-8 rounded-full border-2 border-(--secondary-base) bg-slate-100 text-primary flex items-center justify-center text-[10px] font-bold">
                                    +5</div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1 text-xs">
                                    <span className="material-symbols-outlined text-[14px]">group</span>
                                    <span>450 Viewing</span>
                                </div>
                                <button
                                    className="bg-white text-primary text-[11px] font-bold px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors">Enter
                                    Space</button>
                            </div>
                        </div>
                        <div
                            className="absolute -right-4 -bottom-4 size-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500">
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <DataTable columns={columns} data={data} title="Leilões activos" description="Esta é uma tabela de leilões activos" />
            </div>
        </div>
    )
}

export default Dashboard

const CardQuickVision = ({ text, icon,  }: { text: string, icon: any }) => {
    return (
        <div
            className="card-border bg-background p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
                <span className="flex items-center justify-center size-8.5 p-2 bg-muted text-muted-foreground rounded-lg">
                    {icon}
                </span>
                <span className="text-green-500 text-xs font-bold flex items-center gap-1">
                    <TrendingUp className="material-symbols-outlined text-[14px]" /> +12%
                </span>
            </div>
            <p className="text-foreground text-xs font-medium uppercase tracking-wider mb-1">{text}</p>
            <h3 className="text-2xl font-bold text-foreground">12,450</h3>
            <p className="text-[10px] text-slate-400 mt-2">v.s. last month: 11,100</p>
        </div>
    )
}
