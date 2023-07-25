import React from 'react';
import { useState } from 'react';
import '../MainUdrzbarske.css';
import { POZIADAVKA_OD_OPTIONS, TYPPOZIADAVKY_OPTIONS } from '../data/selectOptions';


export function DetailyPoziadavky() {
    /* Definicia Konstant */
    const [poziadavkaOd, setPoziadavkaOd] = useState('');
    const [typPoziadavky, setTypPoziadavky] = useState('');

    const areRequiredFieldsFilled = typPoziadavky !== '' && poziadavkaOd !== ''; /* Kontrola vyplnenia povinnych poli

    /* Hlavna cast kodu */
    return (
        <div className="containerTypPoziadavky">
            <div className="SekciaTypPoziadavky">
                <div>Typ požiadavky</div>
            </div>
            <div className="SekciaTypPoziadavkyPolia">
                <label>Typ požiadavky</label>
                <div>
                    <select name="TypPoziadavkyDropdown"
                        value={typPoziadavky}
                        onChange={(e) => setTypPoziadavky(e.target.value)}
                        style={{ backgroundColor: poziadavkaOd === '' ? '#ffff99' : 'initial' }}
                    >
                        {TYPPOZIADAVKY_OPTIONS.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label style={{ display: typPoziadavky !== '' ? 'block' : 'none' }}>Coll ID </label> {/* Toto je ze sa to narenderuje ale tak sa to skryje*/}
                </div>
                <div>
                    <input type="text" name="CollID" style={{ display: typPoziadavky !== '' ? 'block' : 'none' }} />    {/*Here, the style property conditionally sets the display of the label and input to none when typPoziadavky is empty, effectively hiding them. But they still take up space in the grid, ensuring that the positions of the other elements are not affected. This should keep the Požiadavka od field in its place.*/}
                </div>
                <label>Požiadavka od </label>
               {/* <div className={`PoziadavkaOdDropdown-container ${poziadavkaOd === '' ? 'yellow-background' : ''}`}> */}
                <div>
                    <select name="PoziadavkaOdDropdown"
                        value={poziadavkaOd}
                        onChange={(e) => setPoziadavkaOd(e.target.value)}
                        style={{ backgroundColor: poziadavkaOd === '' ? '#ffff99' : 'initial' }} /*Toto sa da napisat aj lepsie, zatial to mam takto */
                    >
                        {POZIADAVKA_OD_OPTIONS.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
                <label>Žiadateľ </label>      {/* People picker je celkom komplikovany, dorobi sa neskor */}
                <input type="text" name="Ziadatel" />
                {typPoziadavky !== '' && (
                    <>
                        <label>Dátum vzniku požiadavky </label>
                        <input type="date" name="DatumVznikuPoziadavky" />  {/* Formatovanie sa musi urobit nejako inak */}
                    </>
                )}
            </div>
            {typPoziadavky !== '' && (         /* Hovorim ze ked je typPoziadavky pradny tak nezobrazim tuto sekciu */
                <>
                    <div className="SekciaZakladneInformacie">
                        <div>Klient - Základné informácie</div>
                    </div>
                    <div className="SekciaZakladneInformaciePolia">
                        <label>CIF dlžníka</label>
                        <input type="text" name="CIFDlznika" />
                        <label>Meno dlžníka</label>
                        <input type="text" name="MenoDlznika" />
                        <label>CIF vlastníka</label>
                        <input type="text" name="CIFVlastnika" />
                        <label>Meno vlastníctva</label>
                        <input type="text" name="MenoVlastnika" />
                        <label>RM</label>
                        <input type="text" name="RM" />
                        <label>PACM</label>
                        <input type="text" name="PACM" />
                        <label>CRS status dlžníka</label>
                        <input type="text" name="CRSStatusDlznika" />
                        <label>Číslo Hypo úveru</label>
                        <input type="text" name="CisloHypoUveru" />
                    </div>
                    <div className="SekciaUdajeONehnutelnost">
                        <div>Údaje o nehnuteľnosti</div>
                    </div>
                    <div className="UdajeONehnutelnostiPolia">
                        <label>Asset Subtype </label>
                        <select name="AssetSubtypeDropdown" class="asset-subtype-select">
                            <option value="">Select...</option>
                        </select>
                        <div></div>
                        <label>List vlastníctva</label>
                        <input type="text" name="ListVlastnictva" />
                        <label>Kód okresu </label>
                        <select name="KodOkresuDropdown">
                            <option value="">Select...</option>
                        </select>
                        <label>Pôvodná hodnota NCV</label>
                        <input type="number" name="PovodnahodnotaNCV" step="0.01" />
                        <label>Pôvodná hodnota ARV</label>
                        <input type="number" name="PovodnáhodnotaARV" step="0.01" />
                        <label>NCV objektu</label>
                        <input type="number" name="NCVobjektu" step="0.01" />
                        <label>Dátum nasledujúceho ohodnotenia</label>
                        <input type="date" name="Datumnasledujúcehoohodnotenia" />
                        <label>Dátum posledneho ohodnotenia</label>
                        <input type="date" name="Datumposlednehoohodnotenia" />
                        <label>Číslo úveru</label>
                        <input type="number" name="CisloUveru" />
                        <label>Poznámka</label>
                        <textarea name="Poznamka" rows="4" cols="50">
                        </textarea>
                        <label>Linky na dokumenty v DMS</label>
                        <textarea name="LinkynadokumentyvDMS" rows="4" cols="50">
                        </textarea>
                    </div>

                    <div className="SekciaUserControlPanel">
                        <div>UserControlPanel</div>
                    </div>

                    <div className="SekciaUserControlPanelPolia">
                        <label>Výber spracovateľa</label>
                        <select name="VyberSpracovatela">
                            <option value="">Select...</option>
                        </select>
                        <div></div>
                        <div></div>
                        <label>Poznámka k preradeniu</label>
                        <textarea name="PoznamkaKPreradeniu" rows="4" cols="50">
                        </textarea>
                        <div></div>
                        <div></div>
                        <label>Požadovaný dátum spracovania</label>
                        <input type="date" name="PozadovanyDatumSpracovania" />
                        <label>Dátum začiatku spracovania</label>
                        <input type="text" name="DatumZaciatkuSpracovania" readOnly />
                        <label>Požadovaný dátum spracovania RM</label>
                        <input type="date" name="PozadovanyDatumSpracovaniaRM" />
                        <label for="APSCheckboxLabel">APS</label>
                        <input type="checkbox" id="APSCheckbox" name="APSCheckbox" />
                    </div>
                    <div className="SekciaUserControlPanelButtons">
                        <div className="ButtonStyle">
                            {areRequiredFieldsFilled && (   /* KEd tieto 2 hodnoty nie su vyplnene tak hidnem Button Submit */
                                <button type="submit">Submit</button>
                            )}
                        </div>
                        {!areRequiredFieldsFilled && (
                            <label className='PovinnePolia'>Nemáte k dispozícii žiadne akcie. Skontrolujte prosím vyplnenie povinných polí</label>
                        )}
                    </div>

                </>   /*The <></> is a shorthand for React.Fragment and is used to group multiple elements together without adding an extra node to the DOM. This way, both SekciaZakladneInformacie and SekciaZakladneInformaciePolia will be rendered only when typPoziadavky is not an empty string.*/
            )}
            <div className="SekciaOstatnePoziadavkyNaOhodnotenie">
                <div>Ostatné požiadavky na ohodnotenie / prehodnotenie nehnuteľnosti - CollID</div>
            </div>
            <div className="SekciaOstatnePoziadavkyNaPrehodnotenieDlznik">
                <div>Ostatné požiadavky na ohodnotenie / prehodnotenie nehnuteľnosti - CIF dlžníka</div>
            </div>
            <div className="SekciaOstatnePoziadavkyNaPrehodnotenieVlastnik">
                <div>Ostatné požiadavky na ohodnotenie / prehodnotenie nehnuteľnosti - CIF vlastníka</div>
            </div>
            <div className="SekciaHistoria">
                <div>História požiadavky</div>
            </div>
        </div>

    );
}